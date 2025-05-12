import type { App } from "vinxi";

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "@tanstack/react-start/config";
import tsConfigPaths from "vite-tsconfig-paths";

const config: Promise<App> = defineConfig({
  tsr: {
    appDirectory: "src",
  },
  server: {
    hooks: {
      "prerender:routes": async (routes) => {
        const { source } = await import("./src/lib/source");
        const pages = source.getPages();

        for (const page of pages) {
          routes.add(page.url);
        }
      },
    },
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },
  vite: {
    build: {
      rollupOptions: {
        // Shiki results in a huge bundle because Rollup tries to bundle every language/theme
        external: ["shiki"],
        // most React.js libraries now include 'use client'
        onwarn(warning, warn) {
          if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
            return;
          }
          warn(warning);
        },
      },
    },
    plugins: [
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
      tailwindcss(),
    ],
  },
});

export default config;
