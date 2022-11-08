import { Text } from '@cos-ui/react';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { ThemeProvider } from 'styled-components';

import colors from '@styles/colors';
import GlobalStyle from '@styles/GlobalStyle';
import { darkTheme, lightTheme } from '@styles/theme';

const App = ({ Component, pageProps }: AppProps) => {
  const isDarkMode = false;
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <header
        css={{
          width: '100%',
          height: '6rem',
          padding: '0 2rem',
          borderBottom: `1px solid ${colors.grey200}`,
          lineHeight: '6rem',
        }}
      >
        <Link href="/">
          <Text
            as="h1"
            variant="sectionTitle"
            sx={{
              color: 'primary',
            }}
          >
            CoStudo
          </Text>
        </Link>
      </header>
      <main
        css={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100vw',
          margin: '2rem',
        }}
      >
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
};

export default App;
