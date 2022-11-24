import { ElementType, ReactNode } from 'react';
import styled, { DefaultTheme, useTheme } from 'styled-components';

import {
  SpacingSX,
  isSpacingProp,
  getSpacingCssProps,
  SpacingValue,
} from '@components/FlexBox/spacing';
import colors from '@styles/colors';
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
  bgColor?: keyof typeof colors | keyof Palette;
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
    if (key === 'bgColor') {
      return { ...css, backgroundColor: theme.palette[value] ?? colors[value] };
    }
    return isSpacingProp(key)
      ? { ...css, ...getSpacingCssProps(key, value) }
      : { ...css, [key]: value };
  }, {});

const FlexBox = (props: FlexBoxProps) => {
  const { sx, as = 'div', children } = props;
  const theme = useTheme();
  const css = sx && getFlexCssProperties(sx, theme);
  return (
    <Wrapper as={as} css={css}>
      {children}
    </Wrapper>
  );
};

export default FlexBox;
