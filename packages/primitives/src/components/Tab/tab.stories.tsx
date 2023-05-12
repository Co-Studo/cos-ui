import { ComponentMeta } from '@storybook/react';

import { Tab } from '.';

export default {
  title: 'Primitives/Tab',
  component: Tab,
} as ComponentMeta<typeof Tab>;

export const Basic = () => (
  <Tab.Group defaultIndex={0}>
    <Tab.List>
      <Tab onClick={() => {}}>Tab A</Tab>
      <Tab>Tab B</Tab>
    </Tab.List>
    <Tab.Panels>
      <Tab.Panel>Tab Panel 1</Tab.Panel>
      <Tab.Panel>Tab Panel 2</Tab.Panel>
    </Tab.Panels>
  </Tab.Group>
);
