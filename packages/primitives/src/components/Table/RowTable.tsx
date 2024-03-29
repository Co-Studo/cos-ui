import { Children, cloneElement, ReactElement, useState } from 'react';

import { offscreen } from '../../styles/commonStyles';
import Cell, { SortingState, initSortingState, SortingConfig } from './Cell';

export type RowTableProps = {
  caption: string;
  columnsWidth?: string[];
  sortingValues?: { [key: string]: (string | number)[] };
  children: ReactElement | ReactElement[];
};

const RowTable = ({
  caption,
  columnsWidth,
  sortingValues,
  children,
  ...restProps
}: RowTableProps) => {
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
      <tbody>
        {Children.toArray(children).map((child) =>
          cloneElement(child as ReactElement, { scope: 'row', sortingConfig }),
        )}
      </tbody>
    </table>
  );
};

type RowProps = {
  scope?: 'row';
  sortingConfig?: SortingConfig;
  children: (ReactElement | ReactElement[])[];
};

const Row = ({ scope, sortingConfig, children, ...restProps }: RowProps) => {
  const [headCell, ...bodyCells] = Children.toArray(children);

  return (
    <tr {...restProps}>
      {cloneElement(headCell as ReactElement, { scope, sortingConfig })}
      {sortingConfig?.sortingState.sortingIndices
        ? sortingConfig.sortingState.sortingIndices.map(
            (index) => bodyCells[index],
          )
        : bodyCells}
    </tr>
  );
};

RowTable.Row = Row;
RowTable.Cell = Cell;

export default RowTable;
