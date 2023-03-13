import { CosStyle, CosThemeProvider } from '@cos-ui/react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    return (
      <CosThemeProvider>
        <CosStyle />
        <Story />
      </CosThemeProvider>
    );
  },
];
