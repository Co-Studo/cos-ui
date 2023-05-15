import { resolve } from 'path';

import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@cos-ui/react',
    },
    rollupOptions: {
      external: ['react', '@cos-ui/primitives'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
});
