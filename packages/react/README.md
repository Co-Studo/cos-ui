# @cos-ui/react

Styled components for CoStudo Project

<br/>

### Getting started

<br/>

1. Install the package

```shell
$ npm install @cos-ui/react
```

<br/>

2. Set global style and theme provider

```typescript jsx
import { CosThemeProvider, CosStyle } from '@cos-ui/react';

const App = ({ Component, pageProps }: AppProps) => (
  <CosThemeProvider>
    <CosStyle />
    {/* and more  */}
  </CosThemeProvider>
);
```

You have to create a declaration file `styled.d.ts`.

```typescript jsx
import {} from 'styled-components/cssprop';
import { Theme } from '@cos-ui/react';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  // This is only necessary if you have eslint complains.
  export interface DefaultTheme extends Theme {}
}
```

If you add theme options, add them to `custom` property.

```typescript jsx
// theme.ts
export type CustomTheme = {
  highlight: string;
}

const customTheme: CustomTheme = {
  highlight: '#ffcc00',
}

// styled.d.ts
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    custom: CustomTheme;
  }
}

// App.tsx
const App = ({ Component, pageProps }: AppProps) => (
  <CosThemeProvider theme={customTheme}>
    <CosStyle />
    {/* and more  */}
  </CosThemeProvider>
);
```

If you want to add more style in your own global style, then use named export (lowercase).

```typescript jsx
import { createGlobalStyle } from 'styled-components';
import { cosStyle } from '@cos-ui/react';

const GlobalStyle = createGlobalStyle`
  ${cosStyle}
  /* other style */
`;
```

<br/>

3. Import the parts

Import and structure the parts.

```typescript jsx
import { BasicTab } from '@cos-ui/react';

const BasicTabDemo = () => (
  <BasicTab.Group>
    <BasicTab.List>
      <BasicTab>Tab A</BasicTab>
      <BasicTab>Tab B</BasicTab>
    </BasicTab.List>
    <BasicTab.Panels>
      <BasicTab.Panel>Tab Panel 1</BasicTab.Panel>
      <BasicTab.Panel>Tab Panel 2</BasicTab.Panel>
    </BasicTab.Panels>
  </BasicTab.Group>
);
```

<br/>

### Demo

You can see demo of our components [here](https://idyllic-puffpuff-476e23.netlify.app/)!
