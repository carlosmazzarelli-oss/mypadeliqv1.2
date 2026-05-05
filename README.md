# Padel iQ — Marketing Website

A multi-page marketing site for the Padel iQ player assessment system. Built with Vite + React + Tailwind + React Router.

Pages: **Home, Method, Stations, Profiles, About** + a "Launch App" button that links to your scoring app.

## ⚙️ One-time setup: Connect your scoring app

Open `src/config.js` and replace the `APP_URL` value with your scoring app's Netlify URL:

```js
export const APP_URL = "https://your-padel-iq-app.netlify.app";
```

That's the only line you need to change. The "Launch App" buttons across all pages will then point to your app.

## Run Locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to Netlify

### Option A — Connect a Git repo (recommended)

1. Push this folder to a GitHub repo
2. In Netlify: **Add new site → Import an existing project → GitHub** → pick your repo
3. Netlify reads `netlify.toml` and auto-fills:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy**

Future `git push` events redeploy automatically.

### Option B — Drag & drop

```bash
npm install
npm run build
```

Drag the `dist/` folder onto Netlify's drop zone.

## Editing Content

All Padel iQ content lives in `src/data.js` — stations, rating bands, profiles, use cases, calibration rules. Edit there to change copy globally without touching the page components.

Site name, tagline, and version live in `src/config.js`.
