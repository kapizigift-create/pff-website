import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',

  build: {
    assets: 'assets',
  },

  server: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },

  adapter: cloudflare(),
});