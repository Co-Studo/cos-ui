import { CosStyle, CosThemeProvider, Text } from '@cos-ui/react';
import type { AppProps } from 'next/app';
import Link from 'next/link';

import colors from '@styles/colors';

const App = ({ Component, pageProps }: AppProps) => (
  <CosThemeProvider>
    <CosStyle />
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
        margin: '2rem',
      }}
    >
      <Component {...pageProps} />
    </main>
  </CosThemeProvider>
);

export default App;
