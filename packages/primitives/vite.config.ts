import { resolve } from 'path';

import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@cos-ui/primitives',
      fileName: 'cosui-primitives',
    },
    rollupOptions: {
      external: ['react', 'styled-components'],
      output: {
        globals: {
          react: 'React',
          'styled-components': 'styled',
        },
      },
    },
  },
});
