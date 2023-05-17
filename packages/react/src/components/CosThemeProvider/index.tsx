import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme } from '../../styles/theme';

type CosThemeProviderProps<T> = {
  theme?: T;
  children: ReactNode;
};

const CosThemeProvider = <T,>({
  theme,
  children,
}: CosThemeProviderProps<T>) => {
  const defaultTheme = lightTheme; // 추후 light, dark theme 적용 시 추가
  const cosTheme = theme && { ...defaultTheme, custom: theme };

  return (
    <ThemeProvider theme={cosTheme || defaultTheme}>{children}</ThemeProvider>
  );
};

export default CosThemeProvider;
