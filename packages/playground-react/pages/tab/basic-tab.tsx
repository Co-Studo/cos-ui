import { BasicTab } from '@cos-ui/react';

const BasicTabPage = () => (
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

export default BasicTabPage;
