import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://thecleanquote.com',
  integrations: [tailwind()],
  trailingSlash: 'ignore',

  build: {
    format: 'directory',
  },

  output: "hybrid",
  adapter: cloudflare()
});