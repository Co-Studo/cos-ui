import { BasicTable } from '@cos-ui/primitives';
import styled from 'styled-components';

const StyledBasicTableRoot = styled(BasicTable)`
  width: 100%;
  overflow: hidden;
  border-top: ${({ theme }) => `0.1rem solid ${theme.palette.borderLine}`};
  table-layout: fixed;
`;

const StyledBasicTableRow = styled(BasicTable.Row)`
  border-bottom: ${({ theme }) => `0.1rem solid ${theme.palette.borderLine}`};
`;

const StyledBasicTableBodyCell = styled(BasicTable.Cell)`
  padding: 1.7rem 2rem;
`;

const StyledBasicTable = Object.assign(StyledBasicTableRoot, {
  Row: StyledBasicTableRow,
  BodyCell: StyledBasicTableBodyCell,
});

export default StyledBasicTable;
