// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://tonglianggurong.com",
  output: "static",
  trailingSlash: "always",
  integrations: [
    sitemap({
      filter: (page) => page !== "https://tonglianggurong.com/404/",
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
