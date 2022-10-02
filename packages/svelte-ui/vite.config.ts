import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import { svelte } from '@sveltejs/vite-plugin-svelte'

const name = 'svelteui';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        // dev: process.env.NODE_ENV !== 'production',
        // customElement: true
      },
    }), 
    dts({ insertTypesEntry: true })
  ],
  build: {
    // target: 'esnext',
    lib: {
      name,
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: (format) => `svelte.${format}.js`,
    },
  },
})
