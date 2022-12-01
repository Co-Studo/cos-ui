import { Tab } from '@cos-ui/primitives';
import styled from 'styled-components';

const StyledTabList = styled(Tab.List)`
  display: flex;
  gap: 2rem;
`;

const StyledTab = styled(Tab)`
  cursor: pointer;

  * {
    color: ${({ theme }) => theme.palette.neutral_1};
    font-size: 2.2rem;
    font-weight: 700;
  }

  &[data-selected='true'] {
    * {
      color: ${({ theme }) => theme.palette.neutral_2_light};
    }
  }
`;

StyledTab.Group = Tab.Group;
StyledTab.List = StyledTabList;
StyledTab.Panels = Tab.Panels;
StyledTab.Panel = Tab.Panel;

export default StyledTab;
