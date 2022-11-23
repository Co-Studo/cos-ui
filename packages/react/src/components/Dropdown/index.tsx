import { Dropdown } from '@cos-ui/primitives';
import styled from 'styled-components';

import colors from '@styles/colors';

const StyledDropdownList = styled(Dropdown.List)`
  padding: 0.1rem;
  box-shadow: 0 4px 10px ${colors.greyOpacity100},
    0 0 4px ${colors.greyOpacity500};
  background-color: ${({ theme }) => theme.palette.bgColor};
  border-radius: 0.2rem;
`;

const StyledDropdownItem = styled(Dropdown.Item)`
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.palette.hoverColor};
  }
`;

const StyledDropdown = Object.assign(Dropdown, {
  List: StyledDropdownList,
  Item: StyledDropdownItem,
});

export default StyledDropdown;
