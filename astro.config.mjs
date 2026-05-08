import { defineConfig } from 'astro/config';

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
});