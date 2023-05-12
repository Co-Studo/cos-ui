import { ReactNode } from 'react';

type CellProps = {
  colSpan?: number;
  rowSpan?: number;
  children: ReactNode;
};

const BasicTableCell = ({ children, ...restProps }: CellProps) => (
  <td {...restProps}>{children}</td>
);

export default BasicTableCell;
