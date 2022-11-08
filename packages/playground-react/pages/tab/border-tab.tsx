import { BorderTab } from '@cos-ui/react';

const BorderTabPage = () => (
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

export default BorderTabPage;
