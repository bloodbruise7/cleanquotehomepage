# thecleanquote.com — Marketing Site

Static marketing site for [thecleanquote.com](https://thecleanquote.com), built with
[Astro](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/) and deployed
to **Cloudflare Pages**.

The app itself lives at <https://app.thecleanquote.com> — every login / "Start Free Trial"
link on this site sends the user to `https://app.thecleanquote.com/login`.

## Pages

| URL                                  | Source                                          |
| ------------------------------------ | ----------------------------------------------- |
| `/`                                  | `src/pages/index.astro` (TheSystem landing)     |
| `/sms-consent/`                      | `src/pages/sms-consent/index.astro`             |
| `/privacy-policy/`                   | `src/pages/privacy-policy/index.astro`          |
| `/terms-and-conditions/`             | `src/pages/terms-and-conditions/index.astro`    |

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static site to ./dist
npm run preview  # serve the built site locally
```

## Deploy — Cloudflare Pages

This is a fully static Astro build (no SSR/adapter) so Cloudflare Pages can serve it
as-is.

1. Connect this GitHub repo in Cloudflare Pages.
2. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** `20` (set `NODE_VERSION=20` env var if needed)
3. Production branch: `main`.
4. Add the custom domain `thecleanquote.com` (apex) under *Custom domains*.

Astro is configured with `trailingSlash: 'ignore'` and `build.format: 'directory'`, so
each route is emitted as `<route>/index.html` — Cloudflare Pages serves both
`/sms-consent` and `/sms-consent/` correctly.

## Static assets

Screenshots used by the homepage live in `public/images/`:

- `calc-desktop.jpg` — hero calculator screenshot
- `calc-mobile.jpg` — calculator section
- `dashboard.jpg` — recalibration engine section
- `timesheets.jpg` — time-tracking section
