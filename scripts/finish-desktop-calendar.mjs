import sharp from "sharp";
// Capture Schedule.jsx at a 1920px desktop viewport, scrolled to 8 AM.
// The crop keeps the desktop toolbar, color legend and complete 8–5 workday.
await sharp(".captures/desktop-schedule-full.png")
  .extract({ left: 35, top: 20, width: 1840, height: 910 })
  .webp({ quality: 92 })
  .toFile("public/images/demo-schedule.webp");
