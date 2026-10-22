import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://theshomi.github.io',
  base: '/',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
