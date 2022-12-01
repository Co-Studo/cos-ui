import { Tab } from '@cos-ui/primitives';
import styled from 'styled-components';

import colors from "@styles/colors";

const StyledTabGroup = styled(Tab.Group)`
  width: 100%;
`;

const StyledTabList = styled(Tab.List)`
  display: flex;
  gap: 2rem;
  width: inherit;
  height: 7rem;
  padding: 0 4.5rem;
  background-color: ${colors.grey100};
`;

const StyledActiveBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: inherit;
  height: 3px;
  background-color: ${({ theme }) => theme.palette.primary};
`;

const StyledTabRoot = styled(Tab)`
  display: flex;
  align-items: center;
  position: relative;
  color: #dfdfdf;
  font-size: 2.2rem;
  font-weight: 700;
  cursor: pointer;

  & > * {
    width: 10rem;
    height: 100%;
  }

  &[data-selected='true'] {
    color: ${({ theme }) => theme.palette.fontColor};
  }

  &:not([data-selected='true']) {
    ${StyledActiveBar} {
      display: none;
    }
  }
`;

const StyledTabPanel = styled(Tab.Panel)`
  width: inherit;
  min-height: 50vh;
  padding: 4.5rem;
  background-color: ${colors.white};
  color: ${({ theme }) => theme.palette.fontColor};
  font-size: 1.8rem;
`;

const StyledTab = Object.assign(StyledTabRoot, {
  Group: StyledTabGroup,
  List: StyledTabList,
  Panels: Tab.Panels,
  Panel: StyledTabPanel,
  ActiveBar: StyledActiveBar,
});

export default StyledTab;
