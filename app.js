(() => {
  "use strict";

  const DATA = (window.LISTINGS || []).slice();
  const PAGE = 24;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  const state = {
    type: "all", q: "", min: 0, area: "", pin: "",
    open24: false, ratedOnly: false, sort: "best",
    view: "grid", shown: PAGE, me: null,
  };

  // ---------- Google Maps links (no API key needed) ----------
  const placeQuery = (p) => `${p.name}, ${p.address}`;
  const gDir = (p) => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(placeQuery(p))}` +
    (p.placeId ? `&destination_place_id=${p.placeId}` : "");
  const gOpen = (p) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(placeQuery(p))}` +
    (p.placeId ? `&query_place_id=${p.placeId}` : "");
  const gEmbed = (p) => `https://maps.google.com/maps?q=${encodeURIComponent(placeQuery(p))}&z=15&output=embed`;

  // ---------- helpers ----------
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const norm = (s) => String(s || "").toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
  const fmt = (n) => n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, "") + "k" : String(n);

  function stars(r) {
    const full = Math.round(r);
    return `<span class="stars" aria-hidden="true">${"★".repeat(full)}<span class="off">${"★".repeat(5 - full)}</span></span>`;
  }
  function ratingHtml(p) {
    if (p.rating == null) {
      return p.reviews ? `<div class="rating"><span class="unrated">💬 ${p.reviews} reviews on ${esc(p.ratingSource)}</span></div>`
        : `<div class="rating"><span class="unrated">✨ New on Dogesh Bhai, see reviews on Google</span></div>`;
    }
    return `<div class="rating" aria-label="Rated ${p.rating} out of 5">${stars(p.rating)} ${p.rating.toFixed(1)}
      ${p.reviews ? `<small>(${fmt(p.reviews)})</small>` : ""}
      ${p.ratingSource ? `<span class="src">${esc(p.ratingSource)}</span>` : ""}</div>`;
  }
  function km(a, b) {
    const R = 6371, d2r = Math.PI / 180;
    const dLat = (b.lat - a.lat) * d2r, dLng = (b.lng - a.lng) * d2r;
    const x = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * d2r) * Math.cos(b.lat * d2r) * Math.sin(dLng / 2) ** 2;
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

  // search index
  DATA.forEach((p) => {
    p._hay = norm([p.name, p.area, p.address, p.pincode, (p.tags || []).join(" "), p.type === "vet" ? "vet veterinary clinic hospital doctor" : "boarding daycare hostel kennel resort"].join(" "));
  });

  // ---------- filtering ----------
  function matches(p) {
    if (state.type !== "all" && p.type !== state.type) return false;
    if (state.min > 0 && !(p.rating >= state.min)) return false;
    if (state.ratedOnly && p.rating == null) return false;
    if (state.open24 && !p.open24) return false;
    if (state.area && p.area !== state.area) return false;
    if (state.pin && p.pincode !== state.pin) return false;
    const q = norm(state.q);
    if (q) {
      if (/^\d{3,6}$/.test(q)) return p.pincode.startsWith(q);
      return q.split(" ").every((w) => p._hay.includes(w));
    }
    return true;
  }
  function score(p) {
    // Bayesian-ish: favour high ratings with real review volume
    if (p.rating == null) return 0;
    const n = p.reviews || 5;
    return (p.rating * n + 4 * 20) / (n + 20);
  }
  function sorted(list) {
    const by = {
      best: (a, b) => score(b) - score(a) || a.name.localeCompare(b.name),
      rating: (a, b) => (b.rating ?? -1) - (a.rating ?? -1) || (b.reviews ?? 0) - (a.reviews ?? 0),
      reviews: (a, b) => (b.reviews ?? -1) - (a.reviews ?? -1),
      name: (a, b) => a.name.localeCompare(b.name),
      near: (a, b) => (a._d ?? 1e9) - (b._d ?? 1e9),
    }[state.sort];
    return list.sort(by);
  }

  // ---------- render ----------
  function card(p, i) {
    const isVet = p.type === "vet";
    return `<article class="card" style="animation-delay:${Math.min(i % PAGE, 12) * 35}ms">
      <div class="card-top ${p.type}">
        <span class="paw-deco" aria-hidden="true">🐾</span>
        <span class="emoji" aria-hidden="true">${isVet ? "🩺" : "🏡"}</span>
        <span class="badge">${isVet ? "Vet / Hospital" : "Boarding / Daycare"}</span>
        ${p.open24 ? `<span class="badge b24">24×7</span>` : ""}
      </div>
      <div class="card-body">
        <h3 data-open="${p.id}" tabindex="0" role="button">${esc(p.name)}</h3>
        ${ratingHtml(p)}
        <div class="meta">
          <span class="loc">📍 ${esc(p.area)}</span>
          <span class="loc">📮 ${esc(p.pincode)}</span>
          ${p._d != null ? `<span class="loc dist">🚗 ${p._d.toFixed(1)} km</span>` : ""}
        </div>
        <p class="addr">${esc(p.address)}</p>
        <div class="tags">${(p.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
        ${p.price ? `<p class="price">💰 ${esc(p.price)}</p>` : ""}
        <div class="card-actions">
          <a class="btn btn-primary" href="${gDir(p)}" target="_blank" rel="noopener">🧭 Directions</a>
          <button class="btn btn-ghost" data-open="${p.id}">Details</button>
          <button class="btn btn-ghost icon-btn" data-share="${p.id}" aria-label="Share ${esc(p.name)}">🔗</button>
        </div>
      </div>
    </article>`;
  }

  let current = [];
  function render() {
    if (state.me) DATA.forEach((p) => { p._d = km(state.me, p); });
    current = sorted(DATA.filter(matches));

    const label = { all: "All places", boarding: "Boardings & daycares", vet: "Vets & pet hospitals" }[state.type];
    $("#resultsTitle").textContent = state.open24 && state.type === "vet" ? "24×7 vets" : label;
    const bits = [];
    if (state.q) bits.push(`"${state.q}"`);
    if (state.area) bits.push(state.area);
    if (state.pin) bits.push(state.pin);
    if (state.min) bits.push(`${state.min}+ ★`);
    $("#resultsSub").textContent = `${current.length} ${current.length === 1 ? "place" : "places"} found${bits.length ? " · " + bits.join(" · ") : " across Gurgaon"}`;

    const grid = $("#grid");
    grid.innerHTML = current.slice(0, state.shown).map(card).join("");
    $("#empty").hidden = current.length > 0;
    $("#moreBtn").hidden = current.length <= state.shown;
    $("#moreBtn").textContent = `Show more (${current.length - state.shown} left)`;

    if (state.view === "map") drawMap();
    syncUrl();
  }

  // ---------- map ----------
  let map, layer;
  function drawMap() {
    if (!window.L) return;
    if (!map) {
      map = L.map("map", { scrollWheelZoom: false }).setView([28.4595, 77.0266], 11);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19, attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);
      layer = L.featureGroup().addTo(map);
    }
    layer.clearLayers();
    current.forEach((p) => {
      const icon = L.divIcon({ className: "", html: `<div class="pin ${p.type}"><span>${p.type === "vet" ? "🩺" : "🐶"}</span></div>`, iconSize: [36, 36], iconAnchor: [18, 36], popupAnchor: [0, -34] });
      L.marker([p.lat, p.lng], { icon, title: p.name }).addTo(layer).bindPopup(
        `<div class="pop"><h4>${esc(p.name)}</h4><p>${p.rating != null ? `★ ${p.rating.toFixed(1)} · ` : ""}${esc(p.area)} · ${esc(p.pincode)}</p>
         <a href="${gDir(p)}" target="_blank" rel="noopener">Directions</a><a class="alt" href="#" data-open="${p.id}">Details</a></div>`);
    });
    if (state.me) L.circleMarker([state.me.lat, state.me.lng], { radius: 9, color: "#7C5CFF", fillOpacity: .8 }).addTo(layer).bindTooltip("You are here");
    setTimeout(() => {
      map.invalidateSize();
      if (layer.getLayers().length) map.fitBounds(layer.getBounds(), { padding: [30, 30], maxZoom: 14 });
    }, 50);
  }

  // ---------- detail modal ----------
  const dlg = $("#detail");
  function openDetail(id) {
    const p = DATA.find((x) => x.id === id);
    if (!p) return;
    $("#dBadge").textContent = (p.type === "vet" ? "🩺 Vet / Hospital" : "🏡 Boarding / Daycare") + (p.open24 ? " · 24×7" : "");
    $("#dTitle").textContent = p.name;
    $("#dRating").innerHTML = ratingHtml(p);
    $("#dAddr").textContent = `📍 ${p.address} · ${p.pincode}`;
    $("#dTags").innerHTML = (p.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("");
    $("#dPrice").textContent = p.price ? `💰 ${p.price}` : "";
    $("#dDir").href = gDir(p);
    $("#dOpen").href = gOpen(p);
    $("#dShare").dataset.share = p.id;
    $("#dFrame").src = gEmbed(p);
    if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", "");
    history.replaceState(null, "", setParam(location.href, "place", p.id));
  }
  function closeDetail() {
    dlg.close ? dlg.close() : dlg.removeAttribute("open");
  }
  dlg.addEventListener("close", () => {
    $("#dFrame").src = "about:blank";
    history.replaceState(null, "", setParam(location.href, "place", ""));
  });
  $("#dClose").addEventListener("click", closeDetail);
  dlg.addEventListener("click", (e) => { if (e.target === dlg) closeDetail(); });

  async function share(id) {
    const p = DATA.find((x) => x.id === id);
    const url = setParam(location.origin + location.pathname, "place", id);
    const text = `${p.name}: ${p.address}`;
    try {
      if (navigator.share) { await navigator.share({ title: p.name, text, url }); return; }
      await navigator.clipboard.writeText(`${text}\n${url}`);
      toast("Link copied 🐾");
    } catch { /* user cancelled */ }
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
    set("sort", state.sort !== "best" && state.sort !== "near" && state.sort);
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
    state.sort = sp.get("sort") || "best";
    return sp.get("place");
  }

  // ---------- controls ----------
  function syncControls() {
    $$(".seg-btn").forEach((b) => { const on = b.dataset.type === state.type; b.classList.toggle("active", on); b.setAttribute("aria-selected", on); });
    $$("#ratingGroup .pill").forEach((b) => b.classList.toggle("active", +b.dataset.min === state.min));
    $("#q").value = state.q;
    $("#area").value = state.area;
    $("#pin").value = state.pin;
    $("#open24").checked = state.open24;
    $("#ratedOnly").checked = state.ratedOnly;
    $("#sort").value = state.sort;
  }
  function update(patch, scroll) {
    Object.assign(state, patch, { shown: PAGE });
    syncControls();
    render();
    if (scroll) $("#explore").scrollIntoView({ behavior: "smooth" });
  }

  function fillSelects() {
    const areas = [...new Set(DATA.map((p) => p.area))].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
    $("#area").insertAdjacentHTML("beforeend", areas.map((a) => `<option>${esc(a)}</option>`).join(""));
    const pins = [...new Set(DATA.map((p) => p.pincode))].sort();
    $("#pin").insertAdjacentHTML("beforeend", pins.map((p) => `<option>${p}</option>`).join(""));
  }

  function locate() {
    if (!navigator.geolocation) { toast("Location isn't available on this device"); return; }
    toast("Sniffing out your location… 🐕");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        state.me = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        update({ sort: "near" }, true);
        toast("Sorted by distance from you 📍");
      },
      () => toast("Couldn't get your location. Try searching by pincode instead."),
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 }
    );
  }

  function countUp(el, to) {
    const t0 = performance.now(), dur = 900;
    const step = (t) => {
      const k = Math.min(1, (t - t0) / dur);
      el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  function bind() {
    $$(".seg-btn").forEach((b) => b.addEventListener("click", () => update({ type: b.dataset.type })));
    let deb;
    $("#q").addEventListener("input", (e) => { clearTimeout(deb); deb = setTimeout(() => update({ q: e.target.value.trim() }), 180); });
    $("#q").addEventListener("keydown", (e) => { if (e.key === "Enter") update({ q: e.target.value.trim() }, true); });
    $("#goBtn").addEventListener("click", () => update({ q: $("#q").value.trim() }, true));
    $$("#quickChips .chip[data-q]").forEach((c) => c.addEventListener("click", () => update({ q: c.dataset.q }, true)));
    $("#nearMe").addEventListener("click", locate);
    $$("#ratingGroup .pill").forEach((b) => b.addEventListener("click", () => update({ min: +b.dataset.min })));
    $("#area").addEventListener("change", (e) => update({ area: e.target.value }));
    $("#pin").addEventListener("change", (e) => update({ pin: e.target.value }));
    $("#open24").addEventListener("change", (e) => update({ open24: e.target.checked }));
    $("#ratedOnly").addEventListener("change", (e) => update({ ratedOnly: e.target.checked }));
    $("#sort").addEventListener("change", (e) => {
      if (e.target.value === "near" && !state.me) { locate(); return; }
      update({ sort: e.target.value });
    });
    const reset = () => update({ type: "all", q: "", min: 0, area: "", pin: "", open24: false, ratedOnly: false, sort: state.me ? "near" : "best" });
    $("#resetBtn").addEventListener("click", reset);
    $("#emptyReset").addEventListener("click", reset);
    $("#moreBtn").addEventListener("click", () => { state.shown += PAGE; render(); });

    $$("[data-emergency]").forEach((b) => b.addEventListener("click", (e) => {
      e.preventDefault();
      update({ type: "vet", open24: true, q: "", area: "", pin: "", min: 0 }, true);
    }));
    $$("[data-jump-type]").forEach((a) => a.addEventListener("click", (e) => {
      e.preventDefault();
      update({ type: a.dataset.jumpType }, true);
    }));

    $$(".vt[data-view]").forEach((b) => b.addEventListener("click", () => {
      state.view = b.dataset.view;
      $$(".vt[data-view]").forEach((x) => { const on = x === b; x.classList.toggle("active", on); x.setAttribute("aria-selected", on); });
      $("#mapWrap").hidden = state.view !== "map";
      $("#grid").hidden = state.view === "map";
      $("#moreBtn").hidden = state.view === "map" || current.length <= state.shown;
      if (state.view === "map") drawMap();
    }));

    const filters = $("#filters");
    $("#filtersOpen").addEventListener("click", () => filters.classList.toggle("open"));
    document.addEventListener("click", (e) => {
      if (filters.classList.contains("open") && !filters.contains(e.target) && e.target.id !== "filtersOpen") filters.classList.remove("open");
    });

    // delegated actions (cards + map popups)
    document.addEventListener("click", (e) => {
      const o = e.target.closest("[data-open]");
      if (o) { e.preventDefault(); openDetail(o.dataset.open); return; }
      const s = e.target.closest("[data-share]");
      if (s) share(s.dataset.share);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && e.target.matches("h3[data-open]")) openDetail(e.target.dataset.open);
    });
  }

  // ---------- boot ----------
  fillSelects();
  const deepPlace = readUrl();
  syncControls();
  bind();
  render();

  const n = DATA.length;
  $("#heroCount").textContent = `${Math.floor(n / 10) * 10}+`;
  countUp($("#statTotal"), n);
  countUp($("#statBoard"), DATA.filter((p) => p.type === "boarding").length);
  countUp($("#statVet"), DATA.filter((p) => p.type === "vet").length);
  countUp($("#stat24"), DATA.filter((p) => p.open24).length);

  if (deepPlace) openDetail(deepPlace);
})();
