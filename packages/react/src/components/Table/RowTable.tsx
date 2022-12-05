import { RowTable } from '@cos-ui/primitives';
import { ComponentProps } from 'react';
import styled, { css } from 'styled-components';

import Text from '@components/Text';

const StyledRowTableRoot = styled(RowTable)`
  width: 100%;
  overflow: hidden;
  border-top: ${({ theme }) => `0.1rem solid ${theme.palette.neutral_1_light}`};
  table-layout: fixed;
`;

const StyledRowTableRow = styled(RowTable.Row)`
  border-bottom: ${({ theme }) =>
    `0.1rem solid ${theme.palette.neutral_1_light}`};
`;

type HeadCellProps = ComponentProps<typeof RowTable.Cell>;

const StyledRowTableHeadCell = styled(RowTable.Cell)<HeadCellProps>`
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
  sortingConfig,
  children,
  ...restProps
}: HeadCellProps) => (
  <StyledRowTableHeadCell
    name={name}
    sortingConfig={sortingConfig}
    {...restProps}
  >
    <Text
      as="div"
      sx={{
        fontWeight: 'bold',
        color:
          sortingConfig &&
          sortingConfig.sortingState.name === name &&
          sortingConfig.sortingState.direction
            ? 'primary'
            : undefined,
      }}
    >
      {children}
    </Text>
  </StyledRowTableHeadCell>
);

const StyledRowTableBodyCell = styled(RowTable.Cell)`
  padding: 1.7rem 2rem;
`;

const StyledRowTable = Object.assign(StyledRowTableRoot, {
  Row: StyledRowTableRow,
  HeadCell,
  BodyCell: StyledRowTableBodyCell,
});

export default StyledRowTable;
