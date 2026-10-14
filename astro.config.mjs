// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import pagefind from "astro-pagefind";
import { unified } from "@astrojs/markdown-remark";
import { remarkReadingTime } from "./src/utils/remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.osga.dev",
  trailingSlash: "always",

  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },

  markdown: {
    processor: unified({ remarkPlugins: [remarkReadingTime] }),
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
      wrap: false,
    },
  },

  integrations: [sitemap(), icon(), pagefind()],
});
