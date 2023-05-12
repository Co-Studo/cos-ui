import TabRoot from './tab';
import Group from './TabGroup';
import List from './TabList';
import Panel from './TabPanel';
import Panels from './TabPanels';

const Tab = Object.assign(TabRoot, {
  List,
  Group,
  Panel,
  Panels,
});

export { Tab };
export * from './tab.types';
