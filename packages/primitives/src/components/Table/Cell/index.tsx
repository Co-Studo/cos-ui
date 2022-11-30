import { ReactNode, Dispatch, SetStateAction } from 'react';

const DIRECTION = {
  ASCENDING: 'ascending',
  DESCENDING: 'descending',
};

export type SortingState = {
  name: string | null;
  direction: typeof DIRECTION[keyof typeof DIRECTION] | null;
  sortingIndices: number[] | null;
};

export const initSortingState = {
  name: null,
  direction: null,
  sortingIndices: null,
};

export type SortingConfig = {
  sortingValues?: { [key: string]: string[] | number[] };
  sortingState: SortingState;
  setSortingState: Dispatch<SetStateAction<SortingState>>;
};

type CellProps = {
  colSpan?: number;
  rowSpan?: number;
  name?: string;
  sortingConfig?: SortingConfig;
  children: ReactNode;
};

interface HeadCellProps extends CellProps {
  scope?: 'col' | 'row';
  sortingConfig: SortingConfig;
}

const HeadCell = ({
  name = '',
  scope,
  sortingConfig,
  children,
  ...restProps
}: HeadCellProps) => {
  const { sortingValues = {}, sortingState, setSortingState } = sortingConfig;
  const isClicked = sortingState.name === name;
  const direction =
    isClicked && sortingState.direction === DIRECTION.DESCENDING
      ? DIRECTION.ASCENDING
      : DIRECTION.DESCENDING;

  const getSortingIndices = () => {
    if (isClicked && sortingState.sortingIndices)
      return sortingState.sortingIndices.reverse();

    const sortedValues = sortingValues[name]
      .map((value: string | number, index: number) => ({
        value,
        index,
      }))
      .sort((a, b) => {
        if (typeof a.value === 'string' && typeof b.value === 'string')
          return b.value.localeCompare(a.value);
        if (typeof a.value === 'number' && typeof b.value === 'number')
          return b.value - a.value;
        return 0;
      });

    return sortedValues.map(({ index }) => index);
  };

  const updateSortingState = () => {
    if (!sortingValues[name])
      throw new Error('Please set sortingValues[name] in Table props.');

    const newSortingState = {
      name,
      direction,
      sortingIndices: getSortingIndices(),
    };
    setSortingState(newSortingState);
  };

  return (
    <th
      scope={scope}
      data-sort={isClicked ? sortingState.direction : undefined}
      {...restProps}
    >
      {name ? (
        <button
          type="button"
          css={{ display: 'block', width: '100%' }}
          onClick={updateSortingState}
        >
          {children}
        </button>
      ) : (
        children
      )}
    </th>
  );
};

const BodyCell = ({ children, ...restProps }: CellProps) => (
  <td {...restProps}>{children}</td>
);

const Cell = ({ name, sortingConfig, children, ...restProps }: CellProps) =>
  sortingConfig ? (
    <HeadCell sortingConfig={sortingConfig} name={name} {...restProps}>
      {children}
    </HeadCell>
  ) : (
    <BodyCell {...restProps}>{children}</BodyCell>
  );

export default Cell;
