// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://darussaadah.netlify.app/',
  output: 'hybrid',
  adapter: netlify(),

  integrations: [
    sitemap(),
    react({ include: ['**/@keystatic/**'] }),
    markdoc(),
    keystatic(),
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});
