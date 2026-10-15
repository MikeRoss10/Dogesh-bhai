#!/usr/bin/env node
/**
 * Refresh data/listings.js with live data from the Google Places API (New).
 *
 *   GOOGLE_MAPS_API_KEY=xxxx node scripts/fetch-google-places.mjs
 *
 * For every listing it looks up the place by "name, address" and fills in the
 * exact coordinates, Google rating, review count, place ID and formatted address.
 * It also runs area-wide text searches to discover new boardings and vets in
 * Gurgaon, and appends any it doesn't already have.
 * Needs Node 18+ (global fetch). Enable "Places API (New)" on the key.
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

const FIELDS = "places.id,places.displayName,places.formattedAddress,places.location,places.rating,places.userRatingCount,places.addressComponents,places.currentOpeningHours.periods";
const GURGAON = { circle: { center: { latitude: 28.4595, longitude: 77.0266 }, radius: 30000 } };

async function textSearch(textQuery, pageToken) {
  const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Goog-Api-Key": KEY, "X-Goog-FieldMask": FIELDS + ",nextPageToken" },
    body: JSON.stringify({ textQuery, locationBias: GURGAON, pageSize: 20, ...(pageToken && { pageToken }) }),
  });
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  return res.json();
}

const pincodeOf = (p) => p.addressComponents?.find((c) => c.types.includes("postal_code"))?.longText;
const is24 = (p) => !!p.currentOpeningHours?.periods?.some((x) => x.open && !x.close);

function apply(item, g) {
  item.placeId = g.id;
  item.address = g.formattedAddress || item.address;
  item.lat = g.location?.latitude ?? item.lat;
  item.lng = g.location?.longitude ?? item.lng;
  if (g.rating != null) { item.rating = g.rating; item.ratingSource = "Google"; }
  if (g.userRatingCount != null) item.reviews = g.userRatingCount;
  item.pincode = pincodeOf(g) || item.pincode;
  if (is24(g)) item.open24 = true;
}

const seen = new Set();
for (const item of listings) {
  try {
    const { places = [] } = await textSearch(`${item.name}, ${item.address}`);
    if (places[0]) { apply(item, places[0]); seen.add(places[0].id); console.log("✓", item.name); }
    else console.log("–", item.name, "(not found)");
  } catch (e) { console.warn("!", item.name, e.message); }
}

// Discover new places across Gurgaon
const queries = [
  ["boarding", "dog boarding in Gurugram"], ["boarding", "pet boarding in Gurgaon"],
  ["boarding", "dog daycare in Gurugram"], ["boarding", "pet hostel Gurgaon"],
  ["vet", "veterinary clinic in Gurugram"], ["vet", "pet hospital in Gurgaon"],
  ["vet", "24 hour vet Gurugram"],
];
for (const [type, q] of queries) {
  let token;
  for (let page = 0; page < 3; page++) {
    const r = await textSearch(q, token);
    for (const g of r.places || []) {
      if (seen.has(g.id)) continue;
      seen.add(g.id);
      const item = {
        id: g.id.slice(-10).toLowerCase(), type, name: g.displayName?.text || "Unnamed",
        area: "Gurugram", tags: [type === "vet" ? "Clinic" : "Boarding"], open24: false,
      };
      apply(item, g);
      listings.push(item);
      console.log("+", item.name);
    }
    token = r.nextPageToken;
    if (!token) break;
  }
}

const header = src.slice(0, src.indexOf("window.LISTINGS"));
fs.writeFileSync(file, header + "window.LISTINGS = " + JSON.stringify(listings, null, 2) + ";\n");
console.log(`\nSaved ${listings.length} listings → data/listings.js`);
