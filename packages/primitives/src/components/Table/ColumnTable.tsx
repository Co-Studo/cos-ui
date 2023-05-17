import { Children, cloneElement, ReactElement, useState } from 'react';

import { offscreen } from '../../styles/commonStyles';
import Cell, { SortingState, initSortingState, SortingConfig } from './Cell';

export type ColumnTableProps = {
  caption: string;
  columnsWidth?: string[];
  sortingValues?: { [key: string]: (string | number)[] };
  children: (ReactElement | ReactElement[])[];
};

const ColumnTable = ({
  caption,
  columnsWidth,
  sortingValues,
  children,
  ...restProps
}: ColumnTableProps) => {
  const [headRow, ...bodyRows] = Children.toArray(children);
  const [sortingState, setSortingState] =
    useState<SortingState>(initSortingState);
  const sortingConfig = { sortingValues, sortingState, setSortingState };

  return (
    <table {...restProps}>
      <caption css={offscreen}>{caption}</caption>
      {columnsWidth && (
        <colgroup>
          {columnsWidth.map((width, index) => {
            const pxWidth = /[0-9.]+rem/.test(width)
              ? `${parseFloat(width) * 10}px`
              : width;
            return (
              // 유동적으로 변하지 않는 리스트
              // eslint-disable-next-line react/no-array-index-key
              <col key={index} width={pxWidth} />
            );
          })}
        </colgroup>
      )}
      <thead>
        {cloneElement(headRow as ReactElement, { scope: 'col', sortingConfig })}
      </thead>
      <tbody>
        {sortingState.sortingIndices
          ? sortingState.sortingIndices.map((index) => bodyRows[index])
          : bodyRows}
      </tbody>
    </table>
  );
};

type RowProps = {
  scope?: 'col';
  sortingConfig?: SortingConfig;
  children: ReactElement | ReactElement[];
};

const Row = ({ scope, sortingConfig, children, ...restProps }: RowProps) => (
  <tr {...restProps}>
    {sortingConfig
      ? Children.toArray(children).map((child) =>
          cloneElement(child as ReactElement, { scope, sortingConfig }),
        )
      : children}
  </tr>
);

ColumnTable.Row = Row;
ColumnTable.Cell = Cell;

export default ColumnTable;
