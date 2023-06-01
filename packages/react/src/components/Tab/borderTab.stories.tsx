import { Meta } from '@storybook/react';

import { BorderTab } from '.';

export default {
  title: 'React/Tab',
  component: BorderTab,
} as Meta<typeof BorderTab>;

export const Border = () => (
  <BorderTab.Group>
    <BorderTab.List>
      <BorderTab>
        Tab A
        <BorderTab.ActiveBar />
      </BorderTab>
      <BorderTab>
        Tab B
        <BorderTab.ActiveBar />
      </BorderTab>
    </BorderTab.List>
    <BorderTab.Panels>
      <BorderTab.Panel>Tab Panel 1</BorderTab.Panel>
      <BorderTab.Panel>Tab Panel 2</BorderTab.Panel>
    </BorderTab.Panels>
  </BorderTab.Group>
);
