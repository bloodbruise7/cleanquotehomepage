# Fictional product captures

The four `demo-*.webp` images are browser screenshots of actual CleanQuote app
components, rendered locally with fictional props and local service responses.
They are component demonstrations, not screenshots of live customer accounts or
proof of an end-to-end production transaction. Example prices are supplied fixtures.

Source reference: CleanQuote app checkout at `ccbd42e` (September 25, 2026).

| Asset | App component | Content |
| --- | --- | --- |
| demo-widget | EmbedCalculatorForm | Home details portion of the website widget |
| demo-pricing | PriceDisplayNew | Owner's calculator result, including optional recurring services |
| demo-booking | QuoteBookingSection | Customer date and available arrival selection |
| demo-organizer | ScheduleOrganizerModal | Proposed assignments for Sample homes A, B and C |

The outer CleanQuote header and fictional-data label belong to this capture shell.
The organizer crop shows its own native dialog; the homepage caption supplies the
fictional-data disclosure. No real names, addresses, email addresses, phone numbers,
access credentials or customer records are included.

## Run locally

1. Use a local CleanQuote app checkout with its dependencies installed.
2. Set `CLEANQUOTE_APP_SOURCE` to that checkout's `app` directory.
3. Link this folder's `node_modules` to the app's `node_modules` (or install the
   matching app dependencies here). Nothing in this directory is served by Astro.
4. From this directory run `node node_modules/vite/bin/vite.js --config vite.config.mjs`.
5. Open `http://127.0.0.1:4391/?screen=widget`, `pricing`, `booking` or `organizer`.
   In booking, choose October 6 and select **See available times**. This calls only
   the local mock. No real booking or message is created.
6. Save full browser PNG captures in the repository's ignored `.captures/` folder
   as `widget.png`, `pricing.png`, `booking.png` and `organizer.png`.
7. Run `node scripts/finish-assets.mjs` from the repository root to crop and encode
   the WebP assets. Inspect the final images, including all edges, before publishing.

The original captures used a 1280 × 720 browser viewport. The full-page images
have a 1270px width when a scrollbar is present. Cropping computes the centered
panel position from actual image width. The widget crop intentionally includes
only the home details, matching the tour's first step.

The content security policy blocks external network connections. Services are
aliased to `services.js`; do not replace that alias with production services or
add credentials. App source remains untouched.
