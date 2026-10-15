#!/usr/bin/env node
/**
 * Refresh data/listings.js with live data from the Google Places API (New).
 *
 *   GOOGLE_MAPS_API_KEY=xxxx node scripts/fetch-google-places.mjs
 *
 * For every listing it looks up the place by "name, address" and fills in the
 * exact coordinates, Google rating, review count, phone number, photos, place ID
 * and formatted address. A Google result is only used when its name matches the
 * listing and it is nearby, so a vague name can't pick up another business's
 * phone number. Permanently closed places are dropped.
 * It also runs area-wide text searches to discover new boardings and vets in
 * Gurgaon, and appends any it doesn't already have.
 * Needs Node 18+ (global fetch). Enable "Places API (New)" on the key.
 *
 * Photos are stored as Google photo references and served through /api/photo,
 * which needs the same key set as GOOGLE_MAPS_API_KEY in the Vercel project.
 */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const KEY = process.env.GOOGLE_MAPS_API_KEY;
if (!KEY) {
  console.error("Set GOOGLE_MAPS_API_KEY first.");
  process.exit(1);
}

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const file = path.join(root, "data", "listings.js");
const src = fs.readFileSync(file, "utf8");
const ctx = { window: {} };
vm.runInNewContext(src, ctx);
const listings = ctx.window.LISTINGS;

const FIELDS = [
  "id", "displayName", "formattedAddress", "location", "rating", "userRatingCount", "addressComponents",
  "currentOpeningHours.periods", "regularOpeningHours.periods", "nationalPhoneNumber", "internationalPhoneNumber",
  "photos", "websiteUri", "businessStatus", "types",
].map((f) => "places." + f).join(",");
const GURGAON = { circle: { center: { latitude: 28.4595, longitude: 77.0266 }, radius: 30000 } };
const inGurgaon = (g) => {
  const { latitude: la, longitude: ln } = g.location || {};
  return la > 28.2 && la < 28.6 && ln > 76.8 && ln < 77.25;
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const DETAIL_FIELDS = FIELDS.replace(/places\./g, "");

// Paced request with backoff on per-minute 429s; a used-up daily quota throws { daily: true }
async function api(url, { body, mask } = {}) {
  for (let attempt = 0; ; attempt++) {
    await sleep(400);
    const res = await fetch(url, {
      method: body ? "POST" : "GET",
      headers: { "Content-Type": "application/json", "X-Goog-Api-Key": KEY, ...(mask && { "X-Goog-FieldMask": mask }) },
      ...(body && { body: JSON.stringify(body) }),
    });
    if (res.ok) return res.json();
    const text = await res.text();
    if (res.status === 429 && /per day/i.test(text)) throw Object.assign(new Error("daily quota used up"), { daily: true });
    if (res.status === 429 && attempt < 5) { await sleep(15000 * (attempt + 1)); continue; }
    throw new Error(`${res.status} ${text.slice(0, 200)}`);
  }
}
const textSearch = (textQuery) => api("https://places.googleapis.com/v1/places:searchText", {
  mask: FIELDS, body: { textQuery, locationBias: GURGAON, pageSize: 10 },
});
const autocomplete = (input) => api("https://places.googleapis.com/v1/places:autocomplete", {
  body: { input, locationBias: GURGAON, includedRegionCodes: ["in"] },
});
const details = (id) => api(`https://places.googleapis.com/v1/places/${id}`, { mask: DETAIL_FIELDS });
const nearby = (type, lat, lng, radius) => api("https://places.googleapis.com/v1/places:searchNearby", {
  mask: FIELDS, body: { includedTypes: [type], maxResultCount: 20, locationRestriction: { circle: { center: { latitude: lat, longitude: lng }, radius } } },
});

// ---------- matching ----------
const STOP = new Set(("pet pets dog dogs cat cats clinic clinics hospital hospitals veterinary vet vets care centre center " +
  "boarding board home house hostel daycare day resort the and of for in at by gurgaon gurugram sector dr multi " +
  "speciality specialty polyclinic surgery services service more").split(" "));
const tokens = (s) => String(s || "").toLowerCase().replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter(Boolean);
const distinct = (s) => tokens(s).filter((t) => !STOP.has(t) && t.length > 1);
const near = (a, b) => a.slice(0, 5) === b.slice(0, 5) || a.includes(b) || b.includes(a);
function km(a, b) {
  const R = 6371, r = Math.PI / 180;
  const x = Math.sin(((b.lat - a.lat) * r) / 2) ** 2 +
    Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(((b.lng - a.lng) * r) / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(x));
}
function isMatch(item, g) {
  if (!inGurgaon(g)) return false;
  const gName = g.displayName?.text || "";
  const ours = distinct(item.name.split("—")[0]), theirs = distinct(gName);
  const d = km(item, { lat: g.location.latitude, lng: g.location.longitude });
  if (!ours.length) return d < 3 && tokens(gName).some((t) => tokens(item.name).includes(t));
  return ours.some((a) => theirs.some((b) => near(a, b))) && d < 15;
}

// ---------- applying Google data ----------
const comp = (g, type) => g.addressComponents?.find((c) => c.types?.includes(type))?.longText;
const is24 = (g) => [g.currentOpeningHours, g.regularOpeningHours].some((h) =>
  h?.periods?.length === 1 && h.periods[0].open && !h.periods[0].close);
function areaOf(g) {
  const s = comp(g, "sublocality_level_1") || comp(g, "neighborhood") || comp(g, "sublocality_level_2") || "";
  return s.replace(/^Sector\s+(\w+).*/i, "Sector $1") || "Gurugram";
}

function apply(item, g) {
  item.placeId = g.id;
  // Prefer Google's name unless it is keyword-stuffed ("X - Pet Clinic In Gurgaon - Pet Shop ...")
  const gName = g.displayName?.text?.trim();
  if (gName && (gName.length <= 48 || !item.name)) item.name = gName.length <= 48 ? gName : gName.split(/\s[-|]\s/)[0];
  item.address = g.formattedAddress || item.address;
  item.lat = g.location?.latitude ?? item.lat;
  item.lng = g.location?.longitude ?? item.lng;
  if (g.rating != null) { item.rating = g.rating; item.ratingSource = "Google"; }
  if (g.userRatingCount != null) item.reviews = g.userRatingCount;
  item.pincode = comp(g, "postal_code") || item.pincode;
  if (is24(g)) item.open24 = true;
  const phone = g.internationalPhoneNumber || g.nationalPhoneNumber;
  if (phone) { item.phone = phone; item.phoneSource = "Google"; }
  if (g.websiteUri) item.website = g.websiteUri;
  if (g.photos?.length) {
    // Google requires showing the photo author's attribution alongside each photo
    item.photos = g.photos.slice(0, 6).map((ph) => ({
      name: ph.name,
      author: ph.authorAttributions?.[0]?.displayName || "",
      authorUri: ph.authorAttributions?.[0]?.uri || "",
    }));
  }
}

// Candidate Google places for a listing. Uses Text Search while its daily quota
// lasts, then Autocomplete + Place Details, which have their own quotas.
let textQuotaGone = false;
async function candidates(item) {
  if (!textQuotaGone) {
    try { return (await textSearch(`${item.name}, ${item.address}`)).places || []; }
    catch (e) {
      if (!e.daily) throw e;
      textQuotaGone = true;
      console.log("Text Search daily quota used up, switching to Autocomplete + Place Details");
    }
  }
  const { suggestions = [] } = await autocomplete(`${item.name.split("—")[0]}, ${item.area}, Gurugram`);
  const ours = distinct(item.name.split("—")[0]);
  const ids = suggestions.map((x) => x.placePrediction).filter(Boolean)
    .filter((p) => !ours.length || ours.some((a) => distinct(p.structuredFormat?.mainText?.text).some((b) => near(a, b))))
    .map((p) => p.placeId).slice(0, 2);
  const out = [];
  for (const id of ids) out.push(await details(id));
  return out;
}

const header = src.slice(0, src.indexOf("window.LISTINGS"));
const removed = new Set();
const save = () => fs.writeFileSync(file, header + "window.LISTINGS = " +
  JSON.stringify(listings.filter((x) => !removed.has(x.id)), null, 2) + ";\n");

const force = process.argv.includes("--force");
const seen = new Set(listings.map((x) => x.placeId).filter(Boolean));
let matched = 0, closed = 0, added = 0;
for (const item of listings) {
  if (item.placeId && !force) continue; // already enriched on an earlier run
  try {
    const g = (await candidates(item)).find((x) => isMatch(item, x) && !seen.has(x.id));
    if (!g) { console.log("–", item.name, "(no confident match, kept as is)"); continue; }
    seen.add(g.id);
    if (g.businessStatus === "CLOSED_PERMANENTLY") { closed++; removed.add(item.id); console.log("✗", item.name, "(permanently closed, removed)"); }
    else {
      const before = item.name;
      apply(item, g);
      matched++;
      console.log("✓", before, "→", g.displayName?.text, `(${g.formattedAddress})`);
    }
    save(); // persist as we go so a quota stop loses nothing
  } catch (e) {
    console.warn("!", item.name, e.message);
    if (e.daily) break;
  }
}

// Discover places across Gurgaon with Nearby Search on a grid of circles
const types = [["veterinary_care", "vet"], ["pet_boarding_service", "boarding"]];
discover: for (let lat = 28.37; lat <= 28.53; lat += 0.04) {
  for (let lng = 76.94; lng <= 77.15; lng += 0.045) {
    for (const [gType, kind0] of types) {
      let r;
      try { r = await nearby(gType, +lat.toFixed(3), +lng.toFixed(3), 3200); }
      catch (e) { console.warn("!", gType, e.message); if (e.daily) break discover; continue; }
      for (const g of r.places || []) {
        if (seen.has(g.id) || !inGurgaon(g) || g.businessStatus === "CLOSED_PERMANENTLY") continue;
        seen.add(g.id);
        const kind = (g.types || []).includes("veterinary_care") ? "vet" : kind0;
        const item = {
          id: "g-" + g.id.slice(-10).toLowerCase(), type: kind, name: "", area: areaOf(g),
          tags: [kind === "vet" ? "Clinic" : "Boarding"], open24: false,
        };
        apply(item, g);
        listings.push(item);
        added++;
        console.log("+", item.type, item.name);
      }
      save();
    }
  }
}

save();
console.log(`\nMatched ${matched}, removed ${closed} closed, discovered ${added} new.`);
console.log(`Saved ${listings.length - removed.size} listings → data/listings.js`);
