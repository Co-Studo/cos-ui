import colors from '@styles/colors';

export type Palette = typeof lightPalette;

const darkPalette = {
  background: {
    primary: colors.blue650,
    primary_disable: colors.blue800,
    primary_active: colors.blue400,
    secondary: colors.grey800,
    secondary_active: colors.grey600,
    danger: colors.red450,
    neutral: colors.grey700,
  },
  border: {
    primary: colors.blue650,
    danger: colors.red450,
    neutral: colors.grey100,
  },
  font: {
    primary: colors.white,
    danger: colors.red450,
    warning: colors.yellow600,
    accent: colors.black,
    neutral: colors.grey200,
    neutral_disable: colors.grey600,
  },
  shadow: {
    opacity_1: colors.greyOpacity100,
    opacity_5: colors.greyOpacity500,
  },
};

const lightPalette = {
  background: {
    primary: colors.blue650,
    primary_disable: colors.blue400,
    primary_active: colors.blue800,
    secondary: colors.grey100,
    secondary_active: colors.grey200,
    danger: colors.red450,
    neutral: colors.grey700,
  },
  border: {
    primary: colors.blue650,
    danger: colors.red450,
    neutral: colors.grey300,
  },
  font: {
    base: colors.black,
    primary: colors.blue650,
    danger: colors.red450,
    warning: colors.yellow600,
    accent: colors.white,
    neutral: colors.grey600,
    neutral_disable: colors.grey200,
  },
  shadow: {
    opacity_1: colors.greyOpacity100,
    opacity_5: colors.greyOpacity500,
  },
};

export type Theme = {
  palette: typeof lightPalette;
};

const darkTheme = {
  palette: darkPalette,
};

const lightTheme = {
  palette: lightPalette,
};

export { darkTheme, lightTheme };
