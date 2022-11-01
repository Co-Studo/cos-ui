import styled from 'styled-components';

import Dropdown from '@components/Dropdown';
import colors from '@styles/colors';

const StyledDropdownList = styled(Dropdown.List)`
  padding: 0.1rem;
  box-shadow: 0px 4px 10px ${colors.greyOpacity100},
    0px 0px 4px ${colors.greyOpacity500};
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

const StyledDropdown = {
  List: StyledDropdownList,
  Item: StyledDropdownItem,
};

export default StyledDropdown;
