import { Palette } from '@styles/theme';
import {} from 'styled-components/cssprop';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: Palette;
  }
}
