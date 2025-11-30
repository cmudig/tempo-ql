import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';
import postcss from './postcss.config.js';

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    minify: false,
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  css: { postcss },
});
