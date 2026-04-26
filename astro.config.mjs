// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';

export default defineConfig({
  site: 'https://darussaadah.netlify.app/',

  integrations: [
    sitemap(),
    react(),
    markdoc(),
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});
