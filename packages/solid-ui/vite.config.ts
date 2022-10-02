import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import solidPlugin from 'vite-plugin-solid';

const name = 'solidui';

export default defineConfig({
  plugins: [
    solidPlugin(),  
    dts({ insertTypesEntry: true }),
  ],
  server: {
    port: 4000,
  },
  build: {
    // target: 'esnext',
    lib: {
      name,
      entry: resolve(__dirname, 'src/index.tsx'),
      formats: ['es'],
      fileName: (format) => `solid.${format}.js`,
    },
  },
});
