// @ts-check
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [
    react(),
    sanity({
      projectId: 'nfw68tne',
      dataset: 'production',
      useCdn: false,
      apiVersion: '2024-03-01',
      studioBasePath: '/studio',
    })
  ],
  vite: {
    server: {
      allowedHosts: true
    },
    optimizeDeps: {
      include: ['sanity', 'sanity/structure', 'styled-components', '@portabletext/react']
    }
  }
});
