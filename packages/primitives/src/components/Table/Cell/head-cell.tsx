import type { Direction, HeadCellProps } from './types';

const HeadCell = ({
  name = '',
  scope,
  sortingConfig,
  children,
  ...restProps
}: HeadCellProps) => {
  const { sortingValues = {}, sortingState, setSortingState } = sortingConfig;
  const isClicked = sortingState.name === name;
  const direction: Direction =
    isClicked && sortingState.direction === 'descending'
      ? 'ascending'
      : 'descending';

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

export default HeadCell;
