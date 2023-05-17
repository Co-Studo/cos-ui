import type { TabPanelProps } from './tab.types';
import { useTabContext } from './TabGroup';

const TabPanel = (props: TabPanelProps) => {
  const { tabId, children, ...restProps } = props;
  const [activeIndex] = useTabContext();
  const isActive = activeIndex === tabId;

  return isActive ? <div {...restProps}>{children}</div> : null;
};

export default TabPanel;
