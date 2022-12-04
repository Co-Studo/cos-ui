import { Dropdown } from '@cos-ui/primitives';
import styled from 'styled-components';

const StyledDropdownList = styled(Dropdown.List)`
  padding: 0.1rem;
  box-shadow: 0 4px 10px ${({ theme }) => theme.palette.shadow_100},
    0 0 4px ${({ theme }) => theme.palette.shadow_500};
  background-color: ${({ theme }) => theme.palette.neutral_1_light};
  border-radius: 0.2rem;
`;

const StyledDropdownItem = styled(Dropdown.Item)`
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.palette.neutral_1};
  }
`;

const StyledDropdown = Object.assign(Dropdown, {
  List: StyledDropdownList,
  Item: StyledDropdownItem,
});

export default StyledDropdown;
