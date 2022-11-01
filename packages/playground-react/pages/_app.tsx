import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@styles/GlobalStyle';
import { darkTheme, lightTheme } from '@styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const isDarkMode = false;
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <main>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
};

export default MyApp;
