// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  server: {
      allowedHosts: ['4cb6-2a01-e0a-4af-52e0-b6bc-425-a514-8af8.ngrok-free.app'],
      host: '0.0.0.0',
      port: 3000,
      mimeTypes: {
          'model/gltf-binary': ['glb']
      }
  },

  preview: {
      host: '0.0.0.0',
      port: 3000,
      mimeTypes: {
          'model/gltf-binary': ['glb']
      }
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [alpinejs()],
});