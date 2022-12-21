# CosThemeProvider

`@cos-ui/react`의 컴포넌트를 사용하기 위한 ThemeProvider 컴포넌트입니다.

`styled-components`의 `ThemeProvider`를 사용하고 있으며, 컴포넌트를 스타일링하기 위해 필요한 `theme`이 적용되어 있습니다.
`theme`에 새롭게 추가하고 싶은 게 있다면 `theme` prop을 사용해 넘겨주면 되며, `theme.custom.highlight`와 같이 사용 가능합니다.

`styled.d.ts` 파일을 생성해 `@cos-ui/react`에서 제공하는 `Theme` 인터페이스를 확장하여 타입을 정의할 수 있습니다. 

### Props

```tsx
type CosThemeProviderProps<T> = {
  theme?: T;
};
```

### Usage

```tsx
// theme.ts
export type CustomTheme = {
  highlight: string;
}

const customTheme: CustomTheme = {
  highlight: '#ffcc00',
}

// styled.d.ts
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  // ESLint를 사용하며 추가로 theme을 제공하지 않는 경우
  // 빈 인터페이스를 정의할 수 있도록 추가
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
