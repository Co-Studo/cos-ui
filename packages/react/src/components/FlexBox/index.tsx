import { ElementType, ReactNode } from 'react';
import styled, { DefaultTheme, useTheme } from 'styled-components';

import {
  SpacingSX,
  getSpacingCssProps,
  SpacingValue,
  isSpacingProp,
  addSpacingUnit,
} from '@styles/spacing';
import { Palette } from '@styles/theme';

type SizeSX = {
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  height?: string;
  maxHeight?: string;
  minHeight?: string;
};

type StyleSX = {
  bgColor?: keyof Palette;
};

export interface FlexBoxSX extends SizeSX, SpacingSX, StyleSX {
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  flexDirection?: 'row' | 'column';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  flexShrink?: number;
  flexGrow?: number;
  gap?: SpacingValue;
}

type FlexBoxProps = {
  as?: ElementType;
  children: ReactNode;
  sx?: FlexBoxSX;
};

const Wrapper = styled.div`
  display: flex;
`;

const getFlexCssProperties = (sx: FlexBoxSX, theme: DefaultTheme) =>
  Object.entries(sx).reduce((css, [key, value]) => {
    switch (true) {
      case key === 'bgColor':
        return {
          ...css,
          backgroundColor: theme.palette[value],
        };
      case key === 'gap':
        return {
          ...css,
          gap: addSpacingUnit(value),
        };
      case isSpacingProp(key):
        return { ...css, ...getSpacingCssProps(key, value) };
      default:
        return { ...css, [key]: value };
    }
  }, {});

const FlexBox = ({ sx, as = 'div', children }: FlexBoxProps) => {
  const theme = useTheme();
  const css = sx && getFlexCssProperties(sx, theme);
  return (
    <Wrapper as={as} css={css}>
      {children}
    </Wrapper>
  );
};

export default FlexBox;
