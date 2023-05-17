import { PropsWithChildren } from 'react';
import { CSSObject } from 'styled-components';

import { typography } from 'src/styles/typography';

import fonts from '../../styles/fonts';
import { SpacingSX, Palette } from '../../styles/styles.types';

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

export type TextProps = PropsWithChildren & {
  variant?: keyof typeof typography;
  sx?: TextSX;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span';
  ellipsis?: boolean | number;
};

export type StyledProp = {
  fontCss: CSSObject;
  ellipsis?: boolean | number;
};

/**
 * TextHighlight
 */
export type HighlightProps = PropsWithChildren & {
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
};
