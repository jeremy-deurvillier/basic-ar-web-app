// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  server: {
      allowedHosts: ['0ab2-2a01-e0a-4af-52e0-6df3-b832-2b32-6932.ngrok-free.app'],
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