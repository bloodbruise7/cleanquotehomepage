import sharp from "sharp";
const capture = async (name, width, top = 20, height) => {
  const input = `.captures/${name}.png`;
  const m = await sharp(input).metadata();
  await sharp(input)
    .extract({
      left: Math.floor((m.width - width) / 2),
      top,
      width,
      height: height ?? m.height - top - 20,
    })
    .webp({ quality: 90 })
    .toFile(`public/images/demo-${name}.webp`);
};
await capture("schedule", 1200);
await capture("timesheets", 1040);
await capture("automations", 1040);
await capture("customer-quote-full", 960);
await capture("calculator-full", 1200);
await sharp(".captures/customer-quote-full.png")
  .extract({ left: 155, top: 20, width: 960, height: 1150 })
  .webp({ quality: 90 })
  .toFile("public/images/demo-customer-quote.webp");
await sharp(".captures/calculator-full.png")
  .extract({ left: 105, top: 1561, width: 1060, height: 558 })
  .webp({ quality: 90 })
  .toFile("public/images/demo-pricing.webp");
await sharp(".captures/calculator-full.png")
  .extract({ left: 35, top: 98, width: 1200, height: 600 })
  .webp({ quality: 90 })
  .toFile("public/images/demo-calculator-input.webp");
