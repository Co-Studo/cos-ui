import fonts from './fonts';

export const typography = {
  body: {
    fontSize: fonts.fontSize.base,
    fontWeight: fonts.fontWeight.regular,
    fontFamily: fonts.fontFamily.base,
    lineHeight: fonts.lineHeight.base,
    letterSpacing: fonts.letterSpacing.base,
  },
  logo: {
    fontSize: fonts.fontSize.xxLarge,
    fontWeight: fonts.fontWeight.bold,
    lineHeight: fonts.lineHeight.reset,
  },
  sectionTitle: {
    fontSize: fonts.fontSize.xLarge,
    fontWeight: fonts.fontWeight.bold,
  },
  sectionDescription: {
    fontSize: fonts.fontSize.base,
  },
  articleTitle: {
    fontSize: fonts.fontSize.medium,
    fontWeight: fonts.fontWeight.bold,
  },
  articleDescription: {
    fontSize: fonts.fontSize.small,
  },
  buttonL: {
    fontSize: fonts.fontSize.large,
    fontWeight: fonts.fontWeight.bold,
  },
  buttonM: {
    fontSize: fonts.fontSize.base,
    fontWeight: fonts.fontWeight.bold,
  },
  buttonS: {
    fontSize: fonts.fontSize.small,
    fontWeight: fonts.fontWeight.bold,
  },
};
