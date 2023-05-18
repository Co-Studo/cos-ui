import { resolve } from 'path';

import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@cos-ui/react',
      fileName: 'cosui-react',
    },
    rollupOptions: {
      external: ['react', '@cos-ui/primitives', 'styled-components'],
      output: {
        globals: {
          react: 'React',
          'styled-components': 'styled',
        },
      },
    },
  },
});
