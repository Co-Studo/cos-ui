import { CosStyle, CosThemeProvider, Text } from '@cos-ui/react';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { css } from 'styled-components';

const App = ({ Component, pageProps }: AppProps) => (
  <CosThemeProvider>
    <CosStyle />
    <header
      css={css`
        width: 100%;
        height: 6rem;
        padding: 0 2rem;
        border-bottom: 1px solid ${({ theme }) => theme.palette.neutral_1_light};
        line-height: 6rem;
      `}
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
        margin: '2rem',
      }}
    >
      <Component {...pageProps} />
    </main>
  </CosThemeProvider>
);

export default App;
