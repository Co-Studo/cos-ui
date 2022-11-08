import { DefaultTheme } from 'styled-components';

import colors from './colors';

export type PaletteOption = 'primary' | 'warning' | 'github' | 'danger';

export interface PaletteOptions {
  primary: string;
  warning: string;
  danger: string;
  github: string;
}

export interface Palette extends PaletteOptions {
  bgColor: string;
  fontColor: string;
  borderLine: string;
  hoverColor: string;
}

export interface Theme extends DefaultTheme {
  palette: Palette;
}

const darkPalette: Palette = {
  primary: colors.blue650,
  warning: colors.yellow600,
  danger: colors.red450,
  github: colors.black,
  bgColor: colors.grey900,
  fontColor: colors.white,
  borderLine: colors.white,
  hoverColor: colors.grey300,
};

const lightPalette: Palette = {
  primary: colors.blue650,
  warning: colors.yellow600,
  danger: colors.red450,
  github: colors.black,
  bgColor: colors.grey100,
  fontColor: colors.black,
  borderLine: colors.grey300,
  hoverColor: colors.grey200,
};

const darkTheme: Theme = {
  palette: darkPalette,
};

const lightTheme: Theme = {
  palette: lightPalette,
};

export { darkTheme, lightTheme };
