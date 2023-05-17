import { Children, ReactElement, cloneElement } from 'react';

import { SortingConfig } from './Cell/types';

type RowProps = {
  scope?: 'col';
  sortingConfig?: SortingConfig;
  children: ReactElement | ReactElement[];
};

const ColumnTableRow = ({
  scope,
  sortingConfig,
  children,
  ...restProps
}: RowProps) => (
  <tr {...restProps}>
    {sortingConfig
      ? Children.toArray(children).map((child) =>
          cloneElement(child as ReactElement, { scope, sortingConfig }),
        )
      : children}
  </tr>
);

export default ColumnTableRow;
