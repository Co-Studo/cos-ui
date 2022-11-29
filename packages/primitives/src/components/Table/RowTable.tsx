import { Children, cloneElement, ReactElement, useState } from 'react';

import Cell, { SortState, SortConfig } from '@components/Table/Cell';
import { offscreen } from '@styles/commonStyles';

export type RowTableProps = {
  caption: string;
  columnsWidth?: string[];
  sortValues?: { [key in string]: (string | number)[] };
  children: ReactElement | ReactElement[];
};

const RowTable = ({
  caption,
  columnsWidth,
  sortValues,
  children,
  ...restProps
}: RowTableProps) => {
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
      <tbody>
        {Children.toArray(children).map((child) =>
          cloneElement(child as ReactElement, { scope: 'row', sortConfig }),
        )}
      </tbody>
    </table>
  );
};

type RowProps = {
  scope?: 'row';
  sortConfig?: SortConfig;
  children: (ReactElement | ReactElement[])[];
};

const Row = ({ scope, sortConfig, children, ...restProps }: RowProps) => {
  const [headCell, ...bodyCells] = Children.toArray(children);

  return (
    <tr {...restProps}>
      {cloneElement(headCell as ReactElement, { scope, sortConfig })}
      {sortConfig?.sortState
        ? sortConfig.sortState.sortIndices.map((index) => bodyCells[index])
        : bodyCells}
    </tr>
  );
};

RowTable.Row = Row;
RowTable.Cell = Cell;

export default RowTable;
