import { Children, ReactElement, cloneElement } from 'react';

import { SortingConfig } from './Cell/types';

type RowProps = {
  scope?: 'row';
  sortingConfig?: SortingConfig;
  children: (ReactElement | ReactElement[])[];
};

const RowTableRow = ({
  scope,
  sortingConfig,
  children,
  ...restProps
}: RowProps) => {
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

export default RowTableRow;
