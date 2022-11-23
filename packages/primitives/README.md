# @cos-ui/primitives

Headless UI components for React

<br/>

### Getting started

<br/>

1. Install the package

```shell
$ npm install @cos-ui/primitives
```

<br/>

2. Import the parts

Import and structure the parts.

```typescript jsx
import { Tab } from '@cos-ui/primitives';

const TabDemo = () => (
  <Tab.Group>
    <Tab.List>
      <Tab>Tab A</Tab>
      <Tab>Tab B</Tab>
    </Tab.List>
    <Tab.Panels>
      <Tab.Panel>Tab Panel 1</Tab.Panel>
      <Tab.Panel>Tab Panel 2</Tab.Panel>
    </Tab.Panels>
  </Tab.Group>
);
```

You can styling your component using `styled` of styled-components.

```typescript jsx
import { Tab } from '@cos-ui/primitives';
import styled from 'styled-components';

const StyledTab = styled(Tab)`
  /* style */
`;

const StyledTabList = styled(Tab.List)`
  /* style */
`;

const StyledTabPanel = styled(Tab.Panel)`
  /* style */
`;

StyledTab.Group = Tab.Group;
StyledTab.List = StyledTabList;
StyledTab.Panels = Tab.Panels;
StyledTab.Panel = StyledTabPanel;

// OR

const StyledTabRoot = styled(Tab)`
  /* style */
`;

const StyledTab = Object.assign(StyledTab, {
  Group: Tab.Group,
  List: StyledTabList,
  Panels: Tab.Panels,
  Panel: StyledTabPanel,
})

export default StyledTab;
```
