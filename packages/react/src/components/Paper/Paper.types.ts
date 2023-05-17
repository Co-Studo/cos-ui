import { MouseEvent, PropsWithChildren } from 'react';

import type { FlexBoxSX } from '../FlexBox';

export type BasePaperSX = {
  borderRadius?: string;
  boxShadow?: string;
};

export const isBasePaperProp = (prop: string): prop is keyof BasePaperSX =>
  ['borderRadius', 'boxShadow'].includes(prop);

export interface FlexPaperSX extends FlexBoxSX, BasePaperSX {}

export type PaperProps = FlexPaperProps;

export type BasePaperProps = PropsWithChildren & {
  sx?: BasePaperSX;
  onClick?: (event: MouseEvent) => void;
};

export type FlexPaperProps = PropsWithChildren & {
  sx?: FlexPaperSX;
  onClick?: (event: MouseEvent) => void;
};
