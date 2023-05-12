import BodyCell from './body-cell';
import HeadCell from './head-cell';
import type { CellProps } from './types';

const Cell = ({ name, sortingConfig, children, ...restProps }: CellProps) =>
  sortingConfig ? (
    <HeadCell sortingConfig={sortingConfig} name={name} {...restProps}>
      {children}
    </HeadCell>
  ) : (
    <BodyCell {...restProps}>{children}</BodyCell>
  );

export default Cell;
