import { ReactElement } from 'react';

type RowProps = {
  children: ReactElement | ReactElement[];
};

const BasicTableRow = ({ children, ...restProps }: RowProps) => (
  <tr {...restProps}>{children}</tr>
);

export default BasicTableRow;
