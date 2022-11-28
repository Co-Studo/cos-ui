import React, { cloneElement, ReactElement, useState } from 'react';

import Cell, { SortState, SortConfig } from '@components/Table/Cell';
import { offscreen } from '@styles/commonStyles';

export type ColumnTableProps = {
  caption: string;
  columnsWidth?: string[];
  sortValues?: { [key in string]: (string | number)[] };
  children: (ReactElement | ReactElement[])[];
};

const ColumnTable = ({
  caption,
  columnsWidth,
  sortValues,
  children,
  ...restProps
}: ColumnTableProps) => {
  const Children = React.Children.toArray(children);
  const [headRow, bodyRows] = [Children[0], Children.splice(1)];
  const [sortState, setSortState] = useState<SortState>(null);
  const sortConfig = { sortValues, sortState, setSortState };

  return (
    <table {...restProps}>
      <caption css={offscreen}>{caption}</caption>
      {columnsWidth && (
        <colgroup>
          {columnsWidth.map((width, index) => (
            // 유동적으로 변하지 않는 리스트
            // eslint-disable-next-line react/no-array-index-key
            <col key={index} width={width} />
          ))}
        </colgroup>
      )}
      <thead>
        {cloneElement(headRow as ReactElement, { scope: 'col', sortConfig })}
      </thead>
      <tbody>
        {sortState
          ? sortState.sortIndices.map((index) => bodyRows[index])
          : bodyRows}
      </tbody>
    </table>
  );
};

type RowProps = {
  scope?: 'col';
  sortConfig?: SortConfig;
  children: ReactElement | ReactElement[];
};

const Row = ({ scope, sortConfig, children, ...restProps }: RowProps) => (
  <tr {...restProps}>
    {sortConfig
      ? React.Children.toArray(children).map((child) =>
          cloneElement(child as ReactElement, { scope, sortConfig }),
        )
      : children}
  </tr>
);

ColumnTable.Row = Row;
ColumnTable.Cell = Cell;

export default ColumnTable;
