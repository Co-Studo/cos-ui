import { ColumnTable } from '@cos-ui/primitives';
import { ComponentProps } from 'react';
import styled, { css } from 'styled-components';

import Text from '@components/Text';

const StyledColumnTableRoot = styled(ColumnTable)`
  width: 100%;
  overflow: hidden;
  border-top: ${({ theme }) => `0.1rem solid ${theme.palette.borderLine}`};
  table-layout: fixed;
`;

const StyledColumnTableRow = styled(ColumnTable.Row)`
  border-bottom: ${({ theme }) => `0.1rem solid ${theme.palette.borderLine}`};
`;

type HeadCellProps = ComponentProps<typeof ColumnTable.Cell>;

const StyledColumnTableHeadCell = styled(ColumnTable.Cell)<HeadCellProps>`
  &[data-sort='ascending'] svg {
    transform: rotate(-180deg);
  }
  ${({ name }) =>
    name
      ? css`
          & button {
            padding: 1.7rem 2rem;
          }
        `
      : css`
          padding: 1.7rem 2rem;
        `}
`;

const HeadCell = ({
  name,
  sortConfig = { sortState: null, setSortState: () => null },
  children,
  ...restProps
}: HeadCellProps) => {
  const { sortState } = sortConfig;

  return (
    <StyledColumnTableHeadCell
      name={name}
      sortConfig={sortConfig}
      {...restProps}
    >
      <Text
        as="div"
        sx={{
          fontWeight: 'bold',
          color:
            sortState?.name === name && sortState?.direction
              ? 'primary'
              : undefined,
        }}
      >
        {children}
      </Text>
    </StyledColumnTableHeadCell>
  );
};

const StyledColumnTableBodyCell = styled(ColumnTable.Cell)`
  padding: 1.7rem 2rem;
`;

const StyledColumnTable = Object.assign(StyledColumnTableRoot, {
  Row: StyledColumnTableRow,
  BodyCell: StyledColumnTableBodyCell,
  HeadCell,
});

export default StyledColumnTable;
