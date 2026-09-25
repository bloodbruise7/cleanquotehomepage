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
      ...[
        "@/components/visits/VisitDetailModal",
        "@/components/tasks/TaskFormModal",
        "@/components/tasks/TaskDetailModal",
        "@/components/schedule/CompleteVisitDialog",
        "@/components/schedule/OrganizerSetupDialog",
      ].map((find) => ({
        find,
        replacement: path.resolve("disabled-modal.jsx"),
      })),
      {
        find: "./AutomationRuleForm",
        replacement: path.resolve("disabled-modal.jsx"),
      },
      ...[
        "@/api/base44Client",
        "@/lib/AuthContext",
        "@/hooks/useBusiness",
        "@/hooks/useActiveLocation",
      ].map((find) => ({
        find,
        replacement: path.resolve("offline-context.js"),
      })),
      { find: /^@\/services$/, replacement: path.resolve("services.js") },
      {
        find: "@/components/calculator/CustomerInfoModal",
        replacement: path.resolve("disabled-modal.jsx"),
      },
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
