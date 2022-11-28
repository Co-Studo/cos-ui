import { ReactElement, ReactNode } from 'react';

import { offscreen } from '@styles/commonStyles';

export type BasicTableProps = {
  caption: string;
  columnsWidth?: string[];
  children: (ReactElement | ReactElement[])[];
};

const BasicTable = ({
  caption,
  columnsWidth,
  children,
  ...restProps
}: BasicTableProps) => (
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
    <tbody>{children}</tbody>
  </table>
);

type RowProps = {
  children: ReactElement | ReactElement[];
};

const Row = ({ children, ...restProps }: RowProps) => (
  <tr {...restProps}>{children}</tr>
);

type CellProps = {
  colSpan?: number;
  rowSpan?: number;
  children: ReactNode;
};

const Cell = ({ children, ...restProps }: CellProps) => (
  <td {...restProps}>{children}</td>
);

BasicTable.Row = Row;
BasicTable.Cell = Cell;

export default BasicTable;
