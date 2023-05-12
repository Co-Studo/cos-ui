import { Dispatch, ReactNode, SetStateAction } from 'react';

export type Direction = 'ascending' | 'descending';

export type SortingState = {
  name: string | null;
  direction: Direction | null;
  sortingIndices: number[] | null;
};

export type SortingConfig = {
  sortingValues?: { [key: string]: string[] | number[] };
  sortingState: SortingState;
  setSortingState: Dispatch<SetStateAction<SortingState>>;
};

export type CellProps = {
  colSpan?: number;
  rowSpan?: number;
  name?: string;
  sortingConfig?: SortingConfig;
  children: ReactNode;
};

export interface HeadCellProps extends CellProps {
  scope?: 'col' | 'row';
  sortingConfig: SortingConfig;
}
