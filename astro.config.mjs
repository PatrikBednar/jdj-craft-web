// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

import markdoc from '@astrojs/markdoc';

export default defineConfig({
  site: 'https://www.jdj-craft.cz',
  
  output: 'static',
  
  adapter: vercel(),
  
  integrations: [
    tailwind(),
    sitemap(),
    react(),
    keystatic(),
    markdoc(),
  ],
});