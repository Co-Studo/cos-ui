import { Meta } from '@storybook/react';

import { BasicTab } from '.';

export default {
  title: 'React/Tab',
  component: BasicTab,
} as Meta<typeof BasicTab>;

export const Basic = () => (
  <BasicTab.Group>
    <BasicTab.List>
      <BasicTab>Tab A</BasicTab>
      <BasicTab>Tab B</BasicTab>
    </BasicTab.List>
    <BasicTab.Panels>
      <BasicTab.Panel>Tab Panel 1</BasicTab.Panel>
      <BasicTab.Panel>Tab Panel 2</BasicTab.Panel>
    </BasicTab.Panels>
  </BasicTab.Group>
);
