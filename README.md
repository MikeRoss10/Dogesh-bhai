# 🐾 Dogesh Bhai

A cheerful, no-sign-up directory of **pet boardings, daycares and vets in Gurgaon**.

- 100+ listings: boardings, daycares, clinics and 24×7 pet hospitals
- Search by **name, area or pincode**
- Filter by **rating**, area, pincode and **open 24×7**; sort by best match, rating, reviews or **nearest to me**
- **Google Maps integration**: one-tap directions, an embedded map on every listing, and a map view of all places
- Shareable links (filters and the open listing are kept in the URL)
- Pure static site (HTML/CSS/JS) with no build step, so it deploys anywhere (Vercel, Netlify, GitHub Pages)

## Run locally

```bash
npx serve .        # or: python3 -m http.server
```

## Data

Listings live in `data/listings.js`. They were collected from public sources (Google Maps, Justdial, Practo, PetBacker and business websites), and each rating shows its source.

To refresh everything from **Google Maps** (exact pins, live Google ratings and review counts, place IDs, and discovery of new places):

```bash
GOOGLE_MAPS_API_KEY=your_key node scripts/fetch-google-places.mjs
```

The key needs **Places API (New)** enabled.

## Deploy

The repo is connected to Vercel. Every push to the production branch deploys automatically. No build settings are needed.
