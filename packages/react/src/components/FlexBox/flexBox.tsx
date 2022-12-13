import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  forwardRef,
  ReactElement,
} from 'react';
import styled, { DefaultTheme, useTheme } from 'styled-components';

import {
  SpacingSX,
  getSpacingCssProps,
  SpacingValue,
  isSpacingProp,
  addSpacingUnit,
} from '@styles/spacing';
import { Palette } from '@styles/theme';

export type SizeSX = {
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  height?: string;
  maxHeight?: string;
  minHeight?: string;
};

export type StyleSX = {
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
  alignSelf?: 'flex-start' | 'flex-end' | 'center';
  justifySelf?: 'flex-start' | 'flex-end' | 'center';
  flexShrink?: number;
  flexGrow?: number;
  gap?: SpacingValue;
}

type FlexBoxProps<T extends ElementType> = {
  as?: T;
  sx?: FlexBoxSX;
} & ComponentPropsWithoutRef<T>;

type FlexBoxComponent = <C extends ElementType = 'div'>(
  props: FlexBoxProps<C> & { ref?: ComponentPropsWithRef<C>['ref'] },
) => ReactElement | null;

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

const FlexBox: FlexBoxComponent = forwardRef(
  <T extends ElementType = 'div'>(
    props: FlexBoxProps<T>,
    ref: ComponentPropsWithRef<T>['ref'],
  ) => {
    const { as = 'div', children, sx } = props;
    const theme = useTheme();
    const css = sx && getFlexCssProperties(sx, theme);
    return (
      <Wrapper ref={ref} as={as} css={css}>
        {children}
      </Wrapper>
    );
  },
);

export default FlexBox;
