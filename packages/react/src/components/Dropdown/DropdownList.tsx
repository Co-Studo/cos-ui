import { Dropdown } from '@cos-ui/primitives';
import styled from 'styled-components';

const DropdownList = styled(Dropdown.List)`
  padding: 0.1rem;
  box-shadow: 0 4px 10px ${({ theme }) => theme.palette.shadow_100},
    0 0 4px ${({ theme }) => theme.palette.shadow_500};
  background-color: ${({ theme }) => theme.palette.neutral_1_light};
  border-radius: 0.2rem;
`;

export default DropdownList;
