import { ReactNode } from 'react';
import styled, { DefaultTheme, useTheme } from 'styled-components';

import fonts from '@styles/fonts';
import { Palette } from '@styles/theme';
import { typography } from '@styles/typography';

export type TextSX = {
  fontSize?: keyof typeof fonts.fontSize;
  fontWeight?: keyof typeof fonts.fontWeight;
  fontFamily?: keyof typeof fonts.fontFamily;
  fontStyle?: keyof typeof fonts.fontStyle;
  color?: keyof Palette;
  lineHeight?: keyof typeof fonts.lineHeight;
  letterSpacing?: keyof typeof fonts.letterSpacing;
  textAlign?: keyof typeof fonts.textAlign;
};

const getCustomStyle = (sx: TextSX, theme: DefaultTheme) =>
  Object.entries(sx).reduce((acc, [key, value]) => {
    acc[key] = key === 'color' ? theme.palette[value] : fonts[key][value];
    return acc;
  }, {});

type TextProps = {
  variant?: keyof typeof typography;
  sx?: TextSX;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span';
  ellipsis?: boolean | number;
  children: ReactNode;
};

type StyledProp = {
  fontCss: TextSX;
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
