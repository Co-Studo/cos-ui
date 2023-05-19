import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          'babel-plugin-styled-components',
          [
            'inline-react-svg',
            {
              svgo: {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        removeViewBox: false,
                      },
                    },
                  },
                  {
                    name: 'removeAttrs',
                    params: { attrs: '(data-name)' },
                  },
                  'cleanupIDs',
                ],
              },
            },
          ],
        ],
      },
    }),
  ],
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
