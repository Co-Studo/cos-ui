import colors from '@styles/colors';

export type Palette = typeof lightPalette;

const darkPalette = {
  primary: colors.blue650,
  primary_light: colors.blue400,
  primary_dark: colors.blue800,
  danger: colors.red450,
  danger_light: colors.red400,
  danger_dark: colors.red600,
  warning: colors.yellow600,
  warning_light: colors.yellow500,
  warning_dark: colors.yellow700,
  neutral_1: colors.grey200,
  neutral_1_light: colors.grey100,
  neutral_1_dark: colors.grey300,
  neutral_2: colors.grey700,
  neutral_2_light: colors.grey600,
  neutral_2_dark: colors.grey800,
  black: colors.black,
  white: colors.white,
  shadow_100: colors.greyOpacity100,
  shadow_500: colors.greyOpacity500,
};

const lightPalette = {
  primary: colors.blue650,
  primary_light: colors.blue400,
  primary_dark: colors.blue800,
  danger: colors.red450,
  danger_light: colors.red300,
  danger_dark: colors.red600,
  warning: colors.yellow600,
  warning_light: colors.yellow500,
  warning_dark: colors.yellow700,
  neutral_1: colors.grey200,
  neutral_1_light: colors.grey100,
  neutral_1_dark: colors.grey300,
  neutral_2: colors.grey700,
  neutral_2_light: colors.grey600,
  neutral_2_dark: colors.grey900,
  black: colors.black,
  white: colors.white,
  shadow_100: colors.greyOpacity100,
  shadow_500: colors.greyOpacity500,
};

export type Theme = {
  palette: Palette;
};

const darkTheme: Theme = {
  palette: darkPalette,
};

const lightTheme: Theme = {
  palette: lightPalette,
};

export { darkTheme, lightTheme };
