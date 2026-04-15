// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

// Keystatic admin hanya aktif di development (local)
// Di production (Netlify), site tetap pure static seperti sebelumnya
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://school-freewebsite.netlify.app',

  integrations: [
    sitemap(),
    react({ include: ['**/@keystatic/**'] }),
    markdoc(),
    ...(isProduction ? [] : [keystatic()]),
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});
