import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

const name = 'ui';

export default defineConfig({
  publicDir: false,
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, './src'),
      '@': resolve(__dirname, './playground'),
    },
  },
  build: {
    lib: {
      name,
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: (format) => `elements.${format}.js`,
      // formats: ['es', 'cjs'],
      // fileName: (format) => {
      //   if (format === 'es') return `elements.mjs`;
      //   if (format === 'cjs') return `elements.cjs`;
      //   return `elements.${format}.js`;
      // },
    },
  },
  // test: {
  //   globals: true,
  //   environment: 'happy-dom',
  // },
});
