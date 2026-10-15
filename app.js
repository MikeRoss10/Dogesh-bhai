(() => {
  "use strict";

  const DATA = (window.LISTINGS || []).slice();
  const PAGE = 30;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const desktop = () => window.matchMedia("(min-width: 1081px)").matches;

  const DEFAULTS = { type: "all", q: "", min: 0, area: "", pin: "", open24: false, hasPhone: false, daycare: false, sort: "best" };
  const DAYCARE = /daycare|day care|creche|crèche|day out|play/i;
  const state = { ...DEFAULTS, shown: PAGE, me: null };

  // ---------- Google Maps links (no API key needed) ----------
  const placeQuery = (p) => `${p.name}, ${p.address}`;
  const gDir = (p) => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(placeQuery(p))}` +
    (p.placeId ? `&destination_place_id=${p.placeId}` : "");
  const gOpen = (p) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(placeQuery(p))}` +
    (p.placeId ? `&query_place_id=${p.placeId}` : "");
  const gEmbed = (p) => `https://maps.google.com/maps?q=${encodeURIComponent(placeQuery(p))}&z=15&output=embed`;
  const telHref = (ph) => "tel:" + ph.replace(/[^\d+]/g, "");
  // Indian mobile numbers (10 digits starting 6-9) can be reached on WhatsApp
  function waHref(p) {
    const d = (p.phone || "").replace(/\D/g, "").replace(/^0/, "").replace(/^91(?=\d{10}$)/, "");
    if (!/^[6-9]\d{9}$/.test(d)) return "";
    const msg = `Hi! I found ${p.name} on Dogesh Bhai and wanted to ask about ${p.type === "vet" ? "an appointment for my pet" : "boarding for my dog"}.`;
    return `https://wa.me/91${d}?text=${encodeURIComponent(msg)}`;
  }
  const photoUrl = (ph, w = 600) => `/api/photo?name=${encodeURIComponent(ph.name)}&w=${w}`;

  // ---------- helpers ----------
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const norm = (s) => String(s || "").toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
  const fmt = (n) => n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, "") + "k" : String(n);
  function km(a, b) {
    const R = 6371, r = Math.PI / 180;
    const x = Math.sin(((b.lat - a.lat) * r) / 2) ** 2 + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(((b.lng - a.lng) * r) / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(x));
  }
  let toastT;
  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastT);
    toastT = setTimeout(() => t.classList.remove("show"), 2600);
  }
  const store = {
    get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* storage unavailable */ } },
  };

  // avatar: initials on a colour picked from the name
  const COLORS = ["#FFE1D1", "#EDE6FF", "#EEFBD3", "#DDF3FF", "#FFE3F0", "#FFF3C4"];
  const SKIP = new Set(["the", "dr", "dr.", "pet", "pets", "and", "&", "-", "a"]);
  function initials(name) {
    const w = name.replace(/[^\p{L}\p{N}\s]/gu, " ").split(/\s+/).filter((x) => x && !SKIP.has(x.toLowerCase()));
    return ((w[0] || name)[0] + (w[1] ? w[1][0] : "")).toUpperCase();
  }
  function hash(s) { let h = 0; for (const c of s) h = (h * 31 + c.charCodeAt(0)) | 0; return Math.abs(h); }
  function avatar(p, big) {
    const ph = p.photos && p.photos[0];
    return `<div class="av${big ? " big" : ""}" style="--c:${COLORS[hash(p.id) % COLORS.length]}">
      ${esc(initials(p.name))}
      ${ph ? `<img src="${photoUrl(ph, 200)}" alt="" loading="lazy" onerror="this.remove()">` : ""}
      <span class="av-ico" aria-hidden="true">${p.type === "vet" ? "🩺" : "🏡"}</span></div>`;
  }
  function rateHtml(p) {
    if (p.rating == null) return `<span class="new">New listing</span>`;
    return `<span class="rate"><span class="star" aria-hidden="true">★</span>${p.rating.toFixed(1)}
      ${p.reviews ? `<small>(${fmt(p.reviews)})</small>` : ""}</span>
      ${p.ratingSource && p.ratingSource !== "Google" ? `<span class="src">${esc(p.ratingSource)}</span>` : ""}`;
  }
  const kindHtml = (p) => `<span class="kind ${p.type}">${p.type === "vet" ? "Vet" : "Boarding"}</span>${p.open24 ? `<span class="kind h24">24×7</span>` : ""}`;

  // search index
  DATA.forEach((p) => {
    p._hay = norm([p.name, p.area, p.address, p.pincode, (p.tags || []).join(" "),
      p.type === "vet" ? "vet veterinary clinic hospital doctor" : "boarding daycare hostel kennel resort"].join(" "));
  });

  // ---------- filtering & sorting ----------
  function matches(p) {
    if (state.type !== "all" && p.type !== state.type) return false;
    if (state.min > 0 && !(p.rating >= state.min)) return false;
    if (state.open24 && !p.open24) return false;
    if (state.hasPhone && !p.phone) return false;
    if (state.daycare && !(p.type === "boarding" && DAYCARE.test(p.name + " " + (p.tags || []).join(" ")))) return false;
    if (state.area && p.area !== state.area) return false;
    if (state.pin && p.pincode !== state.pin) return false;
    const q = norm(state.q);
    if (q) {
      if (/^\d{3,6}$/.test(q)) return (p.pincode || "").startsWith(q);
      return q.split(" ").every((w) => p._hay.includes(w));
    }
    return true;
  }
  // favour high ratings backed by real review volume
  const score = (p) => p.rating == null ? 0 : (p.rating * (p.reviews || 5) + 4 * 20) / ((p.reviews || 5) + 20);
  function sorted(list) {
    const by = {
      best: (a, b) => score(b) - score(a) || a.name.localeCompare(b.name),
      rating: (a, b) => (b.rating ?? -1) - (a.rating ?? -1) || (b.reviews ?? 0) - (a.reviews ?? 0),
      reviews: (a, b) => (b.reviews ?? -1) - (a.reviews ?? -1),
      name: (a, b) => a.name.localeCompare(b.name),
      near: (a, b) => (a._d ?? 1e9) - (b._d ?? 1e9),
    }[state.sort] || ((a, b) => score(b) - score(a));
    return list.sort(by);
  }

  // ---------- cards ----------
  function card(p, i) {
    const call = p.phone
      ? `<a class="btn btn-call" href="${telHref(p.phone)}">📞 Call</a>`
      : `<a class="btn btn-line" href="${gOpen(p)}" target="_blank" rel="noopener" title="Phone number is on the Google Maps listing">📞 Get number</a>`;
    return `<article class="card" data-id="${p.id}" style="animation-delay:${Math.min(i % PAGE, 10) * 30}ms">
      ${avatar(p)}
      <div class="c-main">
        <div class="c-top">${kindHtml(p)}${p._d != null ? `<span class="dist">${p._d < 1 ? Math.round(p._d * 1000) + " m" : p._d.toFixed(1) + " km"} away</span>` : ""}</div>
        <h3 data-open="${p.id}" tabindex="0" role="button">${esc(p.name)}</h3>
        <div class="c-meta">${rateHtml(p)}<span class="sep"></span><span>${esc(p.area)}</span>${p.pincode ? `<span class="sep"></span><span>${esc(p.pincode)}</span>` : ""}</div>
        <p class="addr">${esc(p.address)}</p>
        ${p.tags && p.tags.length ? `<div class="tags">${p.tags.slice(0, 4).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>` : ""}
        ${p.price ? `<div class="price">${esc(p.price)}</div>` : ""}
        <div class="c-actions">
          ${call}
          <a class="btn btn-ink" href="${gDir(p)}" target="_blank" rel="noopener">🧭 Directions</a>
          <button class="btn ghost" data-open="${p.id}">Details</button>
          <button class="btn ghost icon" data-share="${p.id}" aria-label="Share ${esc(p.name)}">↗</button>
        </div>
      </div>
    </article>`;
  }

  let current = [];
  function render() {
    if (state.me) DATA.forEach((p) => { p._d = km(state.me, p); });
    current = sorted(DATA.filter(matches));

    $("#resultsCount").innerHTML = `<b>${current.length}</b> ${state.daycare ? "daycare" : ""} ${current.length === 1 ? "place" : "places"}${state.q ? ` for “${esc(state.q)}”` : ""}`;
    $("#list").innerHTML = current.slice(0, state.shown).map(card).join("");
    $("#empty").hidden = current.length > 0;
    const left = current.length - state.shown;
    $("#moreBtn").hidden = left <= 0;
    $("#moreBtn").textContent = `Show ${Math.min(left, PAGE)} more`;
    const active = JSON.stringify(pick(state)) !== JSON.stringify(pick(DEFAULTS));
    $("#resetBtn").hidden = !active;

    drawMap();
    syncUrl();
  }
  const pick = (s) => ({ type: s.type, q: s.q, min: s.min, area: s.area, pin: s.pin, open24: s.open24, hasPhone: s.hasPhone, daycare: s.daycare });

  // ---------- map ----------
  let map, layer, markers = new Map(), mapReady = false;
  function ensureMap() {
    if (map || !window.L) return;
    map = L.map("map", { scrollWheelZoom: true, zoomControl: true }).setView([28.4595, 77.0466], 11);
    L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
      maxZoom: 19, subdomains: "abcd",
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    }).addTo(map);
    layer = L.featureGroup().addTo(map);
    mapReady = true;
  }
  const mapVisible = () => desktop() || document.body.classList.contains("show-map");
  function pinIcon(p, on) {
    return L.divIcon({ className: "", html: `<div class="pin ${p.type}${on ? " on" : ""}"><span>${p.type === "vet" ? "🩺" : "🐶"}</span></div>`, iconSize: [30, 30], iconAnchor: [15, 30], popupAnchor: [0, -28] });
  }
  let fitKey = "";
  function drawMap() {
    if (!mapVisible()) return;
    ensureMap();
    if (!mapReady) return;
    layer.clearLayers();
    markers.clear();
    current.forEach((p) => {
      const m = L.marker([p.lat, p.lng], { icon: pinIcon(p), title: p.name, riseOnHover: true });
      m.bindPopup(`<div class="pop"><b>${esc(p.name)}</b><small>${p.rating != null ? `★ ${p.rating.toFixed(1)} · ` : ""}${esc(p.area)}</small>
        <div class="row">${p.phone ? `<a class="call" href="${telHref(p.phone)}">Call</a>` : ""}<a class="go" href="${gDir(p)}" target="_blank" rel="noopener">Directions</a><a href="#" data-open="${p.id}">Details</a></div></div>`);
      m.on("click", () => highlightCard(p.id));
      m.addTo(layer);
      markers.set(p.id, m);
    });
    if (state.me) L.circleMarker([state.me.lat, state.me.lng], { radius: 9, color: "#1B1B1F", weight: 3, fillColor: "#C6F36B", fillOpacity: 1 }).addTo(layer).bindTooltip("You");
    const key = current.map((p) => p.id).join(",");
    setTimeout(() => {
      map.invalidateSize();
      if (key !== fitKey && layer.getLayers().length) { map.fitBounds(layer.getBounds(), { padding: [40, 40], maxZoom: 15 }); fitKey = key; }
    }, 30);
  }
  let litPin = null;
  function lightPin(id) {
    if (litPin && markers.get(litPin)) markers.get(litPin).setIcon(pinIcon(DATA.find((x) => x.id === litPin)));
    litPin = id;
    const m = id && markers.get(id);
    if (m) { m.setIcon(pinIcon(DATA.find((x) => x.id === id), true)); m.setZIndexOffset(1000); }
  }
  function highlightCard(id) {
    const el = $(`.card[data-id="${id}"]`);
    $$(".card.hl").forEach((c) => c.classList.remove("hl"));
    if (el && desktop()) { el.classList.add("hl"); el.scrollIntoView({ behavior: "smooth", block: "center" }); }
  }

  // ---------- detail drawer ----------
  const dlg = $("#detail");
  function openDetail(id) {
    const p = DATA.find((x) => x.id === id);
    if (!p) return;
    $("#dAv").outerHTML = avatar(p, true).replace('class="av', 'id="dAv" class="av');
    $("#dKind").innerHTML = kindHtml(p);
    $("#dTitle").textContent = p.name;
    $("#dRating").innerHTML = `<div class="c-meta">${rateHtml(p)}<span class="sep"></span><span>${esc(p.area)}</span></div>`;
    $("#dAddr").textContent = [p.address, p.pincode && !(p.address || "").includes(p.pincode) ? p.pincode : ""].filter(Boolean).join(" · ");
    const call = $("#dCall");
    if (p.phone) {
      $("#dPhone").innerHTML = `<a href="${telHref(p.phone)}">${esc(p.phone)}</a>`;
      call.href = telHref(p.phone); call.textContent = "📞 Call"; call.removeAttribute("target");
    } else {
      $("#dPhone").textContent = "Not listed yet. Check the Google Maps listing.";
      call.href = gOpen(p); call.textContent = "📞 Get number"; call.target = "_blank";
    }
    const wa = waHref(p);
    $("#dWa").hidden = !wa; if (wa) $("#dWa").href = wa;
    $("#dDir").href = gDir(p);
    $("#dOpen").href = gOpen(p);
    $("#dShare").dataset.share = p.id;
    $("#dPriceRow").hidden = !p.price;
    $("#dPrice").textContent = p.price || "";
    $("#dTags").innerHTML = (p.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("");
    const gal = $("#dGallery");
    gal.innerHTML = (p.photos || []).map((ph) => `<figure><img src="${photoUrl(ph, 800)}" alt="Photo of ${esc(p.name)}" loading="lazy" onerror="this.parentNode.remove()">
      ${ph.author ? `<figcaption>📷 ${ph.authorUri ? `<a href="${esc(ph.authorUri)}" target="_blank" rel="noopener">${esc(ph.author)}</a>` : esc(ph.author)}</figcaption>` : ""}</figure>`).join("");
    gal.hidden = !(p.photos && p.photos.length);
    $("#dFrame").src = gEmbed(p);
    openDialog(dlg);
    dlg.scrollTop = 0;
    history.replaceState(null, "", setParam(location.href, "place", p.id));
  }
  function openDialog(d) { if (typeof d.showModal === "function") d.showModal(); else d.setAttribute("open", ""); }
  function closeDialog(d) { d.close ? d.close() : d.removeAttribute("open"); }
  dlg.addEventListener("close", () => {
    $("#dFrame").src = "about:blank";
    history.replaceState(null, "", setParam(location.href, "place", ""));
  });
  $("#dClose").addEventListener("click", () => closeDialog(dlg));
  [dlg, $("#sos")].forEach((d) => d.addEventListener("click", (e) => { if (e.target === d) closeDialog(d); }));

  // ---------- emergency sheet ----------
  const sos = $("#sos");
  function renderSos() {
    let vets = DATA.filter((p) => p.type === "vet" && p.open24);
    if (state.me) vets.forEach((p) => { p._d = km(state.me, p); });
    vets.sort(state.me ? (a, b) => a._d - b._d : (a, b) => score(b) - score(a));
    $("#sosSub").textContent = state.me
      ? "Nearest vets listed as open 24×7. Call before you leave so they're ready for you."
      : "Vets listed as open 24×7, best rated first. Call before you leave so they're ready for you.";
    $("#sosLocate").hidden = !!state.me;
    $("#sosList").innerHTML = vets.slice(0, 15).map((p) => `<li>
      <b>${esc(p.name)}</b>
      <small>${p._d != null && state.me ? `${p._d.toFixed(1)} km · ` : ""}${p.rating != null ? `★ ${p.rating.toFixed(1)} · ` : ""}${esc(p.area)}</small>
      ${p.phone ? `<a class="btn btn-call" href="${telHref(p.phone)}">📞 Call</a>` : `<a class="btn btn-ink" href="${gDir(p)}" target="_blank" rel="noopener">🧭 Go</a>`}
    </li>`).join("");
  }
  function openSos() { renderSos(); openDialog(sos); }
  $("#sosClose").addEventListener("click", () => closeDialog(sos));
  $("#sosLocate").addEventListener("click", () => locate(() => renderSos()));

  async function share(id) {
    const p = DATA.find((x) => x.id === id);
    const url = setParam(location.origin + location.pathname, "place", id);
    const text = `${p.name}${p.phone ? ` (${p.phone})` : ""}: found on Dogesh Bhai`;
    try {
      if (navigator.share) { await navigator.share({ title: p.name, text, url }); return; }
      await navigator.clipboard.writeText(`${text}\n${url}`);
      toast("Link copied 🐾");
    } catch { /* share cancelled */ }
  }

  // ---------- URL state ----------
  function setParam(href, k, v) {
    const u = new URL(href);
    if (v) u.searchParams.set(k, v); else u.searchParams.delete(k);
    return u.toString();
  }
  function syncUrl() {
    const u = new URL(location.href);
    const set = (k, v) => (v ? u.searchParams.set(k, v) : u.searchParams.delete(k));
    set("type", state.type !== "all" && state.type);
    set("q", state.q);
    set("min", state.min || "");
    set("area", state.area);
    set("pin", state.pin);
    set("open24", state.open24 ? "1" : "");
    set("phone", state.hasPhone ? "1" : "");
    set("daycare", state.daycare ? "1" : "");
    set("sort", !["best", "near"].includes(state.sort) && state.sort);
    history.replaceState(null, "", u);
  }
  function readUrl() {
    const sp = new URLSearchParams(location.search);
    state.type = ["boarding", "vet"].includes(sp.get("type")) ? sp.get("type") : "all";
    state.q = sp.get("q") || "";
    state.min = +sp.get("min") || 0;
    state.area = sp.get("area") || "";
    state.pin = sp.get("pin") || "";
    state.open24 = sp.get("open24") === "1";
    state.hasPhone = sp.get("phone") === "1";
    state.daycare = sp.get("daycare") === "1";
    state.sort = sp.get("sort") || "best";
    return sp.get("place");
  }

  // ---------- controls ----------
  function syncControls() {
    $$(".tab").forEach((b) => { const on = b.dataset.type === state.type; b.classList.toggle("active", on); b.setAttribute("aria-selected", on); });
    const chipOn = { min4: state.min === 4, min45: state.min === 4.5, open24: state.open24, hasPhone: state.hasPhone, daycare: state.daycare, near: state.sort === "near" };
    $$("[data-chip]").forEach((c) => { c.classList.toggle("on", !!chipOn[c.dataset.chip]); c.setAttribute("aria-pressed", !!chipOn[c.dataset.chip]); });
    $("#q").value = state.q;
    $("#area").value = state.area;
    $("#pin").value = state.pin;
    $("#sort").value = state.sort;
  }
  function update(patch, scroll) {
    Object.assign(state, patch, { shown: PAGE });
    syncControls();
    render();
    if (scroll) $("#explore").scrollIntoView({ behavior: "smooth" });
  }

  function fillSelects() {
    const count = (k) => DATA.reduce((m, p) => (p[k] && m.set(p[k], (m.get(p[k]) || 0) + 1), m), new Map());
    const areas = [...count("area")].filter(([, n]) => n >= 2).map(([a]) => a).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
    $("#area").insertAdjacentHTML("beforeend", areas.map((a) => `<option>${esc(a)}</option>`).join(""));
    const pins = [...count("pincode").keys()].filter((p) => /^\d{6}$/.test(p)).sort();
    $("#pin").insertAdjacentHTML("beforeend", pins.map((p) => `<option>${p}</option>`).join(""));
  }

  function locate(done) {
    if (!navigator.geolocation) { toast("Location isn't available on this device"); return; }
    toast("Sniffing out your location… 🐕");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        state.me = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        toast("Sorted by distance from you 📍");
        done ? done() : update({ sort: "near" });
      },
      () => toast("Couldn't get your location. Try a pincode instead."),
      { timeout: 10000, maximumAge: 300000 }
    );
  }

  function runIntent(kind) {
    const base = { ...DEFAULTS };
    if (kind === "travel") Object.assign(base, { type: "boarding" });
    if (kind === "vet") Object.assign(base, { type: "vet" });
    if (kind === "daycare") Object.assign(base, { type: "boarding", daycare: true });
    update(base, true);
  }

  function bind() {
    $$(".tab").forEach((b) => b.addEventListener("click", () => update({ type: b.dataset.type })));
    let deb;
    $("#q").addEventListener("input", (e) => { clearTimeout(deb); deb = setTimeout(() => update({ q: e.target.value.trim() }), 200); });
    $("#q").addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); update({ q: e.target.value.trim() }, true); } });
    $("#goBtn").addEventListener("click", () => update({ q: $("#q").value.trim() }, true));

    $$("[data-chip]").forEach((c) => c.addEventListener("click", () => {
      const k = c.dataset.chip;
      if (k === "min4") update({ min: state.min === 4 ? 0 : 4 });
      if (k === "min45") update({ min: state.min === 4.5 ? 0 : 4.5 });
      if (k === "open24") update({ open24: !state.open24 });
      if (k === "hasPhone") update({ hasPhone: !state.hasPhone });
      if (k === "daycare") update(state.daycare ? { daycare: false } : { daycare: true, type: "boarding" });
      if (k === "near") state.sort === "near" ? update({ sort: "best" }) : (state.me ? update({ sort: "near" }) : locate());
    }));
    $("#area").addEventListener("change", (e) => update({ area: e.target.value }));
    $("#pin").addEventListener("change", (e) => update({ pin: e.target.value }));
    $("#sort").addEventListener("change", (e) => {
      if (e.target.value === "near" && !state.me) { e.target.value = state.sort; locate(); return; }
      update({ sort: e.target.value });
    });
    const reset = () => update({ ...DEFAULTS, sort: state.me ? "near" : "best" });
    $("#resetBtn").addEventListener("click", reset);
    $("#emptyReset").addEventListener("click", reset);
    $("#moreBtn").addEventListener("click", () => { state.shown += PAGE; render(); });

    $$("[data-intent]").forEach((b) => b.addEventListener("click", () => runIntent(b.dataset.intent)));
    $$("[data-sos]").forEach((b) => b.addEventListener("click", openSos));
    $$("[data-jump]").forEach((a) => a.addEventListener("click", (e) => { e.preventDefault(); update({ ...DEFAULTS, type: a.dataset.jump }, true); }));

    // map toggle (tablet/mobile)
    $("#mapFab").addEventListener("click", () => {
      const on = document.body.classList.toggle("show-map");
      $("#mapFab span").textContent = on ? "📋 List" : "🗺️ Map";
      if (on) { fitKey = ""; drawMap(); }
    });
    let wasDesktop = desktop();
    window.addEventListener("resize", () => {
      if (desktop() !== wasDesktop) { wasDesktop = desktop(); fitKey = ""; drawMap(); }
    });

    // list ↔ map hover link
    $("#list").addEventListener("mouseover", (e) => { const c = e.target.closest(".card"); if (c && c.dataset.id !== litPin) lightPin(c.dataset.id); });
    $("#list").addEventListener("mouseleave", () => lightPin(null));

    // delegated actions
    document.addEventListener("click", (e) => {
      const o = e.target.closest("[data-open]");
      if (o) { e.preventDefault(); openDetail(o.dataset.open); return; }
      const s = e.target.closest("[data-share]");
      if (s) share(s.dataset.share);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && e.target.matches("h3[data-open]")) openDetail(e.target.dataset.open);
    });

    // nav border + map button visibility
    const nav = $("#nav");
    addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 8), { passive: true });
    new IntersectionObserver(([en]) => document.body.classList.toggle("in-explore", en.isIntersecting), { rootMargin: "-30% 0px -30% 0px" })
      .observe($("#explore"));

    // checklist (remembered on this device)
    const boxes = $$("#clList input");
    const saved = store.get("db-checklist") || [];
    boxes.forEach((b, i) => { b.checked = !!saved[i]; });
    const sync = () => {
      const n = boxes.filter((b) => b.checked).length;
      $("#clCount").textContent = `${n}/${boxes.length}`;
      $("#clBar").style.width = `${(n / boxes.length) * 100}%`;
      $("#clDone").hidden = n !== boxes.length;
      store.set("db-checklist", boxes.map((b) => b.checked));
    };
    boxes.forEach((b) => b.addEventListener("change", sync));
    sync();
  }

  // ---------- boot ----------
  fillSelects();
  const deepPlace = readUrl();
  syncControls();
  bind();
  render();

  $("#mTotal").textContent = DATA.length;
  $("#mCall").textContent = DATA.filter((p) => p.phone).length;
  $("#m24").textContent = DATA.filter((p) => p.open24 && p.type === "vet").length;

  if (deepPlace) openDetail(deepPlace);
})();
