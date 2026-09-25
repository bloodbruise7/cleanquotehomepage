# Product captures with fictional customer data

These assets are browser screenshots of actual CleanQuote React components rendered locally. They demonstrate the interface, not a live customer transaction. The capture shell supplies the CleanQuote header and fictional-data label. App source reference: `ccbd42e`, September 25, 2026.

| Asset | Actual app surface | Data |
| --- | --- | --- |
| demo-widget | EmbedCalculatorForm | Fictional home details |
| demo-calculator-full / demo-calculator-input / demo-pricing | Calculator.jsx and its native PriceDisplayNew | Actual engine results using authorized Portland settings |
| demo-customer-quote / demo-customer-quote-full | QuoteView.jsx | Reliable Housekeeping branding, fictional customer, initial and biweekly calculated prices |
| demo-booking | QuoteBookingSection | Fictional date and arrival selection |
| demo-organizer | ScheduleOrganizerModal | Proposed assignments for Sample homes A–C |
| demo-schedule | Full Schedule.jsx desktop page, ScheduleControls and WeekView | Sixteen fictional visits, three cleaners, September 21–25, 8 AM–5 PM |
| demo-timesheets | TimesheetSettingsTab | Fictional pay-period and break settings |
| demo-automations | AutomationRuleCard | Fictional lifecycle rules; no messages sent |

## Isolation and privacy

Services, the API client, auth, business and location hooks are replaced with local fixtures. Quote creation and automation editing are intentionally unavailable. CSP blocks external connections and form submission. Never point these mocks at production or add credentials. The homepage serves only the final images, never the capture fixture or pricing inputs.

The quote has Sample Customer as its customer. No address, email or phone is supplied for either customer or business; empty contact rows are hidden as a privacy redaction. Reliable Housekeeping's authorized logo and colors are retained. The inherited platform service descriptions are supplied locally. No real customer records are read, created, approved, booked or sent.

## Reproduce

1. Use the referenced CleanQuote app checkout with dependencies installed; set `CLEANQUOTE_APP_SOURCE` to its `app` directory. Link this directory's `node_modules` to the app's dependencies.
2. Supply the ignored `local-pricing.json` with only the authorized residential platform pricing fields. Do not commit company-specific calibration or private settings. The Portland capture uses a $60 hourly target and empty location calibration offsets. Place the authorized logo at ignored `public/reliablehousekeeping-logo.png`.
3. Run `node node_modules/vite/bin/vite.js --config vite.config.mjs` here.
4. Open `http://127.0.0.1:4391/?screen=calculator`. Enter 2,000 sqft, 3 bedrooms, 2 bathrooms, No for pets/oven/refrigerator, Recurring with initial/weekly/biweekly/monthly selected, and Regular soil. Do not save a quote. Verified results: $426.64 initial, $187.84 weekly, $221.91 biweekly, $261.90 monthly.
5. Open `/QuoteView?screen=quote&token=fictional-local-token` for the local customer quote; it uses the same engine. Other screens: `widget`, `booking`, `organizer`, `schedule`, `timesheets`, `automations`.
6. Save full-page browser PNGs to the ignored repository `.captures/` folder. The expanded capture names are `calculator-full.png`, `customer-quote-full.png`, `timesheets.png`, and `automations.png`.
7. From the repository root, run `node scripts/finish-expanded-assets.mjs` to crop and encode the expanded images. The original `finish-assets.mjs` handles only booking, widget and organizer.

Original browser viewport: 1280 × 720; full-page captures with a scrollbar are 1270px wide. Crop coordinates depend on this viewport and must be reviewed if the app changes. The homepage shows input/result excerpts and a quote excerpt; enlarged views show the complete captured screens in a scrollable dialog.

## Desktop calendar capture

The calendar uses the full unmodified Schedule.jsx page, with offline visit/job/roster responses in desktop-schedule-data.js. View-only modal dependencies are disabled. The capture shell adds a three-person color legend and an explicit fictional-data label. No customer or employee records are read or changed.

Use a 1920 × 1000 desktop viewport, select Week and Hide Weekends, and use the date picker to select September 21–25, 2026 if needed. Scroll the calendar to 8 AM. Capture the top 1910 × 930 pixels as `.captures/desktop-schedule-full.png`, then run `node scripts/finish-desktop-calendar.mjs`. This replaces the previous stripped-down, ten-visit calendar image. The generated asset is 1840 × 910. All sixteen jobs finish by 5 PM; no cleaner is double-booked. Daily visit counts are 4, 3, 2, 5 and 2. Cleans last 3–8 hours; repeat stops for the same cleaner have a one-hour gap. Colors consistently identify the three cleaners.
