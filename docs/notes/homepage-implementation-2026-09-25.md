# Homepage implementation, 2026-09-25

## Design direction
Cleaning owners need to see the connection between a home estimate and a booked, staffed, paid visit. Keep the app's Poppins typography, navy #003366 and orange #FF8C00. Add warm orange #FFF0DB, pale blue #EAF3FF, and mint #E6F4EB with ink #16233A. Use large, left-aligned headings, restrained body widths, and broad alternating sections.

Layout: an asymmetric headline and real booking screen; then a three-step clickable product tour; a wide calculator feature; an organizer split; payments and AI panels; transparent plan and competitor pricing; FAQ and final trial action.

[Cleaning-owner promise | actual booking preview]
[Website details -> tailored quote -> available time]
[Pricing foundation | calculator screenshot]
[Organizer screenshot | owner control]
[Get paid | use your AI]
[Plans and sourced comparison]

Review against brief: avoid a wall of equally weighted feature cards. Make the real booking workflow the distinctive visual device. Use color to distinguish quoting, scheduling and payments, preserving app UI colors. Use screenshots of actual local React components with explicit fictional fixtures; do not invent a live calculator or pretend demo amounts are calculated on this marketing page.

## Claims and evidence
- Founder-provided pricing foundation: informed by thousands of real cleaning visits. This is a historical foundation, separate from each company's ongoing calibration. Do not publish more specific counts or company totals.
- Verified recent app source: local cleanquote-task-blocking-2026-09-25 at ccbd42e. Trial/signup, plan display constants, seats, widget, booking eligibility, organizer proposal, AI connections and Stripe capabilities inspected.
- Pricing: Solo $39, Team $69, Enterprise $99 per month. Team owner + 5 additional members; Enterprise owner + 15, extra seats $9. Optional Communications Hub $49/month, extra numbers $5; usage and payment processing are additional.
- Jobber regular monthly Connect with 5 users: $199. Housecall Pro regular monthly Essentials with 5 users: $189. Official pricing pages checked Sep 25, 2026. Different features/limits; no parity or universally-cheapest claim.
- No competitor conversion analytics were available. Research describes visible marketing patterns, not proven conversion performance.

## Scope
Marketing site only. Fixture imports actual app components and substitutes local responses. No live app records, accounts, messages, payments, or customer data created or changed.

## Expanded product story — follow-up

The expanded homepage preserves the original booking, calculator, operations, payments, AI, pricing and FAQ content while adding a desktop calendar, timesheets/payroll and break rules, lifecycle automations, and a dedicated Communications Hub section. Payment and AI cards now use related pale green and blue surfaces. The comparison row says CleanQuote Team; the actual plan card retains its product plan name.

### Screenshot and price evidence
- Rendered actual Calculator.jsx and QuoteView.jsx from app commit ccbd42e in an isolated local fixture. Auth, business and active-location hooks resolve fictional IDs; the live API client is disabled and external connections are blocked by CSP.
- Read only the authorized Portland rate/calibration fields, residential platform parameters, brand logo/colors, and default service descriptions. No customer records were read or changed.
- Portland target rate: $60 per labor hour, empty location calibration offsets. Example home: 2,000 sqft, 3 bedrooms, 2 bathrooms, regular soil, no pets or appliance extras. Actual calculator UI produced initial $426.64, weekly $187.84, biweekly $221.91, monthly $261.90 in the app's normal order.
- Customer quote uses the same residential pricing engine and initial/biweekly results, Reliable Housekeeping logo/colors, and inherited platform service descriptions. Customer is Sample Customer; no business or customer address, phone or email is present. No quote was saved, approved, booked or sent.
- Calendar: actual WeekView, ten fictional visits across October 5–9. Timesheet settings: actual TimesheetSettingsTab with fictional pay/break configuration. Automation rules: actual AutomationRuleCard with fictional rules; no messages are sent.
- Local platform coefficients are ignored and excluded from the public repository. Screenshots are static; the homepage does not run the pricing engine.

### Capability boundaries
- Organizer generates a scheduling proposal and flags partial/unschedulable fits; the owner reviews and applies changes. Do not imply it silently books every job or always satisfies every preference.
- Payroll source supports pay periods, confirmation/locking and CSV export. Marketing distinguishes preparation from payroll transfers and tax filing.
- Custom SMS needs the Communications Hub and messaging setup. Automation triggers cover pipeline stages, upcoming/completed visits and overdue invoices. Voicemail configuration exists, but delivery is paused by default and requires Hub eligibility plus platform enablement; no sending was enabled or tested.
- Recalibration uses eligible logged work to refine time estimates. Rates remain owner-controlled. Do not guarantee that every update monotonically improves accuracy.

### Validation
- Production build passed; existing Cloudflare/Sharp advisory is unchanged (all product screenshots are static WebP assets).
- Local reference audit passed for all four pages and 81 link/image references.
- Browser checks passed at desktop, 390px and 320px widths with no document overflow. Four-step payment flow fits at 320px.
- Verified tailored-quote tab, full screenshot enlargement, scrollable long screenshots, Escape dismissal and focus restoration; calendar enlargement loads. Updated dialogs reset their scroll position on open.
- Reviewed the calculator, customer quote, calendar, timesheets and automation captures for fictional data and removal of contact details.

## Desktop calendar and label corrections
- Replaced the ten-visit component example with the full desktop Schedule.jsx page and native toolbar. Forty fictional jobs across five fictional cleaners have varied service types, durations, times and profile colors, all within 8 AM–5 PM. Validated that no cleaner has overlapping assignments.
- Calendar capture includes the Week selection, date header, Organize/Assigned controls, weekday headers, color legend and the complete working day. Source remains ccbd42e; no app source or live records changed.
- Payroll heading now reads “Track with Timesheets. Run Payroll.” Plan names are Solo, Team, Enterprise, without an extra Team subtitle. Added a verified 64px white gap above the orange Communications Hub card.
- Validation: production build, local reference audit, desktop and mobile layout inspection, asset privacy review, workday and assignment checks.

## Realistic weekly calendar refinement
- Replaced the crowded forty-visit example with sixteen fictional jobs and three consistent cleaner colors. Monday through Friday have 4, 3, 2, 5 and 2 jobs respectively.
- Jobs run for 3–8 hours. The busiest days include one cleaner working 8–11 AM and noon–4 PM, another on longer deep/initial cleans, and a third working 10 AM–2 PM. Multiple stops for the same cleaner have an hour between jobs.
- Captured the actual unmodified desktop Schedule.jsx page again using the existing isolated fixture. No real customer or employee data, live records, or app code changed. Homepage changes are limited to the calendar asset and its alternative text.
- Validated all jobs stay within 8 AM–5 PM and no cleaner has overlapping assignments. Visually reviewed the new desktop capture.
