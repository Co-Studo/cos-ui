import { Theme } from '@cos-ui/react';
import {} from 'styled-components/cssprop';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
