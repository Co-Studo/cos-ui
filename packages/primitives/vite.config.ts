import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react({
      babel: { plugins: ['babel-plugin-styled-components'] },
    }),
  ],
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
