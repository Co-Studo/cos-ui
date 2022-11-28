import { ReactNode, Dispatch, SetStateAction } from 'react';

const DIRECTION = {
  ASCENDING: 'ascending',
  DESCENDING: 'descending',
};

export type SortState = {
  name: string;
  direction: typeof DIRECTION[keyof typeof DIRECTION];
  sortIndices: number[];
} | null;

export type SortConfig = {
  sortValues?: { [key in string]: (string | number)[] };
  sortState: SortState;
  setSortState: Dispatch<SetStateAction<SortState>>;
};

type CellProps = {
  colSpan?: number;
  rowSpan?: number;
  name?: string;
  sortConfig?: SortConfig;
  children: ReactNode;
};

interface HeadCellProps extends CellProps {
  scope?: 'col' | 'row';
  sortConfig: SortConfig;
}

const HeadCell = ({
  name = '',
  scope,
  sortConfig,
  children,
  ...restProps
}: HeadCellProps) => {
  const { sortValues = {}, sortState, setSortState } = sortConfig;
  const direction =
    sortState &&
    sortState.name === name &&
    sortState.direction === DIRECTION.DESCENDING
      ? DIRECTION.ASCENDING
      : DIRECTION.DESCENDING;

  const getSortIndices = () => {
    const sortValuesByName = sortValues[name].map((value, index) => ({
      value,
      index,
    }));
    sortValuesByName.sort((a, b) => {
      if (a.value > b.value) return direction === DIRECTION.ASCENDING ? 1 : -1;
      if (a.value < b.value) return direction === DIRECTION.ASCENDING ? -1 : 1;
      return 0;
    });

    return sortValuesByName.map(({ index }) => index);
  };

  const updateSortState = () => {
    if (!sortValues[name])
      throw new Error('Please set sortValues[name] in Table props.');

    const newSortState = {
      name,
      direction,
      sortIndices: getSortIndices(),
    };
    setSortState(newSortState);
  };

  return (
    <th
      scope={scope}
      data-sort={sortState?.name === name ? sortState?.direction : undefined}
      {...restProps}
    >
      {name ? (
        <button
          type="button"
          css={{ display: 'block', width: '100%' }}
          onClick={updateSortState}
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

const Cell = ({ name, sortConfig, children, ...restProps }: CellProps) =>
  sortConfig ? (
    <HeadCell sortConfig={sortConfig} name={name} {...restProps}>
      {children}
    </HeadCell>
  ) : (
    <BodyCell {...restProps}>{children}</BodyCell>
  );

export default Cell;
