import { MouseEvent } from 'react';

import type { TabPropsType } from './tab.types';
import { useTabContext } from './TabGroup';

const Tab = (props: TabPropsType) => {
  const { tabId, children, onClick = () => {}, ...restProps } = props;
  const [activeIndex, setActiveIndex] = useTabContext();
  const isActive = activeIndex === tabId;

  const handleTabClick = (event?: MouseEvent<HTMLButtonElement>) => {
    if (tabId !== undefined) setActiveIndex(tabId);
    onClick(event);
  };

  return (
    <li {...restProps} data-selected={isActive}>
      <button type="button" onClick={handleTabClick}>
        {children}
      </button>
    </li>
  );
};

export default Tab;
