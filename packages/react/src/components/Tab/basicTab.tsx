import { Tab } from '@cos-ui/primitives';
import styled from 'styled-components';

import colors from "@styles/colors";

const StyledTabList = styled(Tab.List)`
  display: flex;
  gap: 2rem;
`;

const StyledTab = styled(Tab)`
  cursor: pointer;

  * {
    font-size: 2.2rem;
    color: #dfdfdf;
  }

  &[data-selected='true'] {
    * {
      color: ${colors.grey600};
    }
  }
`;

const StyledTabPanel = styled(Tab.Panel)`
  color: ${colors.grey600};
`;

StyledTab.Group = Tab.Group;
StyledTab.List = StyledTabList;
StyledTab.Panels = Tab.Panels;
StyledTab.Panel = StyledTabPanel;

export default StyledTab;
