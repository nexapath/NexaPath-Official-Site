
# NexaPath Full Package (Upgrade + Original)

This repo contains:
- **Next.js 14 (App Router) upgraded site** — at repo root (builds by default on Vercel/Netlify).
- **Original Vite project (unaltered)** — in `/legacy-vite/` for reference and rollback.

## Deploy (recommended)
- Connect the repo to Vercel (or Netlify) and choose **Next.js**. Default settings work.
- Production URL structure supports EN (`/...`) and Traditional Chinese (`/zh-Hant/...`).

## Contents
- `/app` — Next.js pages (EN + zh-Hant)
- `/public` — merged assets from original project
- `/legacy-vite` — your original project untouched (index.html, vite config, etc.)

## Contact form (Formspree)
1) Create a form at https://formspree.io/ → get your form ID (looks like `xyzabcde`).
2) Set an environment variable in your hosting:
   - `FORMSPREE_ID=<your-id>`
3) The site posts to `/api/contact` which forwards to Formspree securely, with a honeypot `_gotcha` field for spam reduction.
