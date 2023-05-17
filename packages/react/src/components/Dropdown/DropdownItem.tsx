import { Dropdown } from '@cos-ui/primitives';
import styled from 'styled-components';

const DropdownItem = styled(Dropdown.Item)`
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.palette.neutral_1};
  }
`;

export default DropdownItem;
