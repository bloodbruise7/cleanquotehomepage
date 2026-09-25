import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";
import { createRequire } from "node:module";
import path from "node:path";
import { readFileSync } from "node:fs";
const require = createRequire(import.meta.url);
const app = process.env.CLEANQUOTE_APP_SOURCE;
if (!app)
  throw new Error(
    "Set CLEANQUOTE_APP_SOURCE to the local CleanQuote app directory.",
  );
const themeModule = { exports: {} };
new Function(
  "module",
  "require",
  readFileSync(path.join(app, "tailwind.config.js"), "utf8"),
)(themeModule, require);
const theme = themeModule.exports;
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@/services", replacement: path.resolve("services.js") },
      { find: "@", replacement: path.join(app, "src") },
    ],
    dedupe: ["react", "react-dom"],
  },
  css: {
    postcss: {
      plugins: [
        tailwind({
          ...theme,
          content: [path.join(app, "src/**/*.{js,jsx,ts,tsx}"), "./*.jsx"],
        }),
        autoprefixer(),
      ],
    },
  },
  server: {
    host: "127.0.0.1",
    port: 4391,
    strictPort: true,
    fs: { allow: [app, path.resolve(".")] },
  },
});
