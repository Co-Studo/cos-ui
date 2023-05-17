import { Children, cloneElement } from 'react';

import type { TabListProps } from './tab.types';

const TabList = (props: TabListProps) => {
  const { children, ...restProps } = props;
  return (
    <ul {...restProps}>
      {Children.map(children, (child, index) =>
        cloneElement(child, {
          tabId: index,
        }),
      )}
    </ul>
  );
};

export default TabList;
