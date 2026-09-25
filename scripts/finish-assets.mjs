import fs from "node:fs/promises";
import sharp from "sharp";

// Browser captures stay local. Only the cropped, optimized demo images ship.
const regions = {
  pricing: [1140, 698, 20],
  booking: [850, 581, 20],
  organizer: [896, 648, 36],
  widget: [740, 632, 20],
};
for (const [name, [width, height, top]] of Object.entries(regions)) {
  const input = `.captures/${name}.png`;
  const metadata = await sharp(input).metadata();
  await sharp(input)
    .extract({
      left: Math.floor((metadata.width - width) / 2),
      top,
      width,
      height,
    })
    .webp({ quality: 90 })
    .toFile(`public/images/demo-${name}.webp`);
}
