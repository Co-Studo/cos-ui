import type {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  ReactElement,
} from 'react';

import type { SpacingValue } from '../../styles/spacing';
import type { Palette, SizeSX, SpacingSX } from '../../styles/styles.types';

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

export type FlexBoxProps<T extends ElementType> = {
  as?: T;
  sx?: FlexBoxSX;
} & ComponentPropsWithoutRef<T>;

export type FlexBoxComponent = <C extends ElementType = 'div'>(
  props: FlexBoxProps<C> & { ref?: ComponentPropsWithRef<C>['ref'] },
) => ReactElement | null;
