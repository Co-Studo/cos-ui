import { Tab } from '@cos-ui/primitives';
import styled from 'styled-components';

const StyledTabGroup = styled(Tab.Group)`
  width: 100%;
`;

const StyledTabList = styled(Tab.List)`
  display: flex;
  gap: 20px;
  width: inherit;
  height: 70px;
  background-color: #f5f5f5;
  padding: 0 45px;
`;

const StyledActiveBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: inherit;
  height: 3px;
  background-color: #007aff;
`;

const StyledTabRoot = styled(Tab)`
  position: relative;
  display: flex;
  align-items: center;
  width: 100px;
  height: 100%;
  cursor: pointer;

  & > * {
    width: 100px;
    height: 100%;
    color: #dfdfdf;
    font-size: 22px;
  }

  &[data-selected='true'] {
    & > * {
      color: #000000;
    }
  }

  &:not([data-selected='true']) {
    & div {
      display: none;
    }
  }
`;

const StyledTabPanel = styled(Tab.Panel)`
  width: inherit;
  min-height: 50vh;
  background-color: #fff;
  color: #000000;
  font-size: 18px;
  padding: 45px;
`;

const StyledTab = Object.assign(StyledTabRoot, {
  Group: StyledTabGroup,
  List: StyledTabList,
  Panels: Tab.Panels,
  Panel: StyledTabPanel,
  ActiveBar: StyledActiveBar,
});

export default StyledTab;
