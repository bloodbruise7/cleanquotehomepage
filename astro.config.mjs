import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://thecleanquote.com',
  integrations: [tailwind()],
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
