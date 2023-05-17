import { CellProps } from './types';

const BodyCell = ({ children, ...restProps }: CellProps) => (
  <td {...restProps}>{children}</td>
);

export default BodyCell;
