import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import keystatic from '@keystatic/astro';

import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.jdj-craft.cz',

  integrations: [
    tailwind(), 
    sitemap(),
    react(),
    keystatic()
  ],

  output: 'static',
  adapter: vercel()
});