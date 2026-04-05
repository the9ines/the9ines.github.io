// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://the9ines.github.io',
  vite: {
    plugins: [tailwindcss()]
  }
});