import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default {
  build: {
    rollupOptions: {
      external: ['@astrojs/rss']
    }
  }
}