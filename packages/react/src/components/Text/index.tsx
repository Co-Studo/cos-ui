import { ReactNode } from 'react';
import styled, { CSSObject, DefaultTheme, useTheme } from 'styled-components';

import fonts from '@styles/fonts';
import {
  isSpacingProp,
  getSpacingCssProps,
  SpacingSX,
} from '@styles/spacing';
import { Palette } from '@styles/theme';
import { typography } from '@styles/typography';

export interface TextSX extends SpacingSX {
  display?: 'block' | 'inline-block' | 'inline';
  fontSize?: keyof typeof fonts.fontSize;
  fontWeight?: keyof typeof fonts.fontWeight;
  fontFamily?: keyof typeof fonts.fontFamily;
  color?: keyof Palette;
  lineHeight?: keyof typeof fonts.lineHeight;
  letterSpacing?: keyof typeof fonts.letterSpacing;
  textAlign?: keyof typeof fonts.textAlign;
  textDecoration?: keyof typeof fonts.textDecoration;
  textTransform?: keyof typeof fonts.textTransform;
  wordBreak?: keyof typeof fonts.wordBreak;
}

const getCustomStyle = (sx: TextSX, theme: DefaultTheme) =>
  Object.entries(sx).reduce((css, [key, value]) => {
    switch (true) {
      case key === 'color':
        return { ...css, color: theme.palette[value] };
      case isSpacingProp(key):
        return { ...css, ...getSpacingCssProps(key, value) };
      default:
        return { ...css, [key]: fonts[key][value] };
    }
  }, {});

type TextProps = {
  variant?: keyof typeof typography;
  sx?: TextSX;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span';
  ellipsis?: boolean | number;
  children: ReactNode;
};

type StyledProp = {
  fontCss: CSSObject;
  ellipsis?: boolean | number;
};

const StyledText = styled.span<StyledProp>`
  ${({ fontCss }) => fontCss};
  ${({ ellipsis }) =>
    ellipsis && {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      display: '-webkit-box',
      WebkitLineClamp: `${ellipsis === true ? 1 : ellipsis}`,
      WebkitBoxOrient: 'vertical',
      wordBreak: 'break-word',
    }};
`;

const element = {
  logo: 'h1',
  sectionTitle: 'h2',
  sectionDescription: 'p',
  articleTitle: 'h3',
  articleDescription: 'p',
};

const Text = ({ variant, sx = {}, as, ellipsis, children }: TextProps) => {
  const theme = useTheme();
  const getVariantStyle = () => variant && typography[variant];
  const fontCss = {
    ...getVariantStyle(),
    ...getCustomStyle(sx, theme),
  };

  return (
    <StyledText
      as={as || (variant && element[variant])}
      fontCss={fontCss}
      ellipsis={ellipsis}
    >
      {children}
    </StyledText>
  );
};

type HighlightProps = {
  sx?: TextSX;
  as?:
    | 'em'
    | 'i'
    | 'strong'
    | 'b'
    | 'del'
    | 's'
    | 'u'
    | 'q'
    | 'ins'
    | 'sub'
    | 'sup';
  children: ReactNode;
};

const Highlight = ({ sx = {}, as = 'strong', children }: HighlightProps) => {
  const theme = useTheme();
  const fontCss = getCustomStyle(sx, theme);

  return (
    <StyledText as={as} fontCss={fontCss}>
      {children}
    </StyledText>
  );
};

Text.Highlight = Highlight;

export default Text;
