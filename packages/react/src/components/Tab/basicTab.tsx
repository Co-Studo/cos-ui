import { Tab } from '@cos-ui/primitives';
import styled from 'styled-components';

const StyledTabList = styled(Tab.List)`
  display: flex;
  gap: 20px;
`;

const StyledTab = styled(Tab)`
  cursor: pointer;

  * {
    font-size: 22px;
    color: #dfdfdf;
  }

  &[data-selected='true'] {
    * {
      color: #939393;
    }
  }
`;

const StyledTabPanel = styled(Tab.Panel)`
  color: #939393;
`;

StyledTab.Group = Tab.Group;
StyledTab.List = StyledTabList;
StyledTab.Panels = Tab.Panels;
StyledTab.Panel = StyledTabPanel;

export default StyledTab;
