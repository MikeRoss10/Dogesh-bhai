// GET /api/photo?name=places/<id>/photos/<ref>&w=600
// Resolves a Google Places photo to its image URL without exposing the API key
// to the browser. Responses are cached at Vercel's edge for 30 days.
const NAME_RE = /^places\/[A-Za-z0-9_-]+\/photos\/[A-Za-z0-9_-]+$/;

export default async function handler(req, res) {
  const key = process.env.GOOGLE_MAPS_API_KEY;
  const { name = "", w = "600" } = req.query;
  if (!key) return res.status(503).send("Photos not configured");
  if (!NAME_RE.test(name)) return res.status(400).send("Bad photo name");
  const width = Math.min(1600, Math.max(100, parseInt(w, 10) || 600));

  const url = `https://places.googleapis.com/v1/${name}/media?maxWidthPx=${width}&skipHttpRedirect=true&key=${key}`;
  const r = await fetch(url);
  if (!r.ok) return res.status(r.status === 404 ? 404 : 502).send("Photo unavailable");
  const { photoUri } = await r.json();
  if (!photoUri) return res.status(404).send("Photo unavailable");

  res.setHeader("Cache-Control", "public, max-age=86400, s-maxage=2592000, stale-while-revalidate=86400");
  res.redirect(302, photoUri);
}
