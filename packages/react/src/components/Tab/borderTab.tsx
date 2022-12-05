import { Tab } from '@cos-ui/primitives';
import styled from 'styled-components';

const StyledTabGroup = styled(Tab.Group)`
  width: 100%;
`;

const StyledTabList = styled(Tab.List)`
  display: flex;
  gap: 2rem;
  width: inherit;
  height: 7rem;
  padding: 0 4.5rem;
  background-color: ${({ theme }) => theme.palette.neutral_1_light};
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
  color: ${({ theme }) => theme.palette.neutral_1};
  font-size: 2.2rem;
  font-weight: 700;
  cursor: pointer;

  & > * {
    width: 10rem;
    height: 100%;
  }

  &[data-selected='true'] {
    color: ${({ theme }) => theme.palette.black};
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
  background-color: ${({ theme }) => theme.palette.white};
  color: ${({ theme }) => theme.palette.black};
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
