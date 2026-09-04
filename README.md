# thecleanquote.com — Marketing Site

Static marketing site for [thecleanquote.com](https://thecleanquote.com), built with
[Astro](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/) and deployed
to **Cloudflare Workers** via Workers Builds (config in `wrangler.jsonc`).

The app itself lives at <https://app.thecleanquote.com> — every login / "Start Free Trial"
link on this site sends the user to `https://app.thecleanquote.com`.

## Pages

| URL                                  | Source                                          |
| ------------------------------------ | ----------------------------------------------- |
| `/`                                  | `src/pages/index.astro` (landing page)          |
| `/sms-consent/`                      | `src/pages/sms-consent/index.astro`             |
| `/privacy-policy/`                   | `src/pages/privacy-policy/index.astro`          |
| `/terms-and-conditions/`             | `src/pages/terms-and-conditions/index.astro`    |

## Brand & design system

The site follows the CleanQuote design system: Poppins, off-white `#f6f8fb` pages, flat
white cards with 1px `#e6eaf1` borders and 16px radius (no drop shadows at rest), navy
`#003366` for primary actions and orange `#FF8C00` for secondary CTAs / attention, pill
buttons, and uppercase eyebrow labels. Tokens live in `tailwind.config.mjs`
(`navy`, `orange`, `page`, `ink`, `line`, …).

- `src/components/Logo.astro` — the flat text wordmark ("Clean" navy + "Quote" orange).
  No image logo is used anywhere on the site.
- `public/favicon.svg` (+ PNG sizes) — navy rounded square with an orange check.
- `src/components/Icon.astro` — inline [Lucide](https://lucide.dev) icons via `lucide-static`
  (no emoji, no icon PNGs).
- `src/components/Nav.astro`, `Footer.astro`, `LegalPage.astro` — shared chrome.
- `src/site.ts` — shared URLs and class tokens (`BTN_PRIMARY`, `EYEBROW`, `CARD`, …).

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs the site to ./dist
npm run preview  # build, then serve locally with wrangler
```

## Deploy — Cloudflare Workers

Pushes to `main` build and deploy through Workers Builds (`npm run build`, then
`npx wrangler deploy`); other branches get a preview version (`npx wrangler versions upload`).
`wrangler.jsonc` must stay in the repo — preview builds fail without it. The Worker name is
`cleanquotehomepage` and serves `dist/` as static assets via the `@astrojs/cloudflare` adapter.

Astro is configured with `trailingSlash: 'ignore'` and `build.format: 'directory'`, so
each route is emitted as `<route>/index.html` and both `/sms-consent` and `/sms-consent/`
resolve.

## Static assets

Product screenshots used by the homepage live in `public/images/` as `*.webp`. They are
crops of the 2x captures in the `cleanquote-screenshots` bundle (fictional demo tenant
"Clearview Home Cleaning"), with the app sidebar trimmed and resized to 1400px wide at most.
`hero-estimate.webp` is the priced-estimate panel of the calculator; `mobile-*.webp` are the
390px phone captures. The SMS consent evidence images (`phoneplancheckbox.png`,
`verbalconsentrecord.png`) also live here.

Homepage copy is written from `cleanquote-feature-summary.md` (the code-verified feature
inventory). Its "accuracy guardrails" section lists what must not be over-claimed: no
pipeline drag-and-drop, the portal doesn't book new cleanings, the widget emails the
estimate rather than showing a price, no GPS tracking, no payroll export, referral rewards
not implemented.
