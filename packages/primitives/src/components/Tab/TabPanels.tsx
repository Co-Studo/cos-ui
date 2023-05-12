import { Children, cloneElement } from 'react';

import type { TabPanelsProps } from './tab.types';

const TabPanels = (props: TabPanelsProps) => {
  const { children } = props;
  return (
    <>
      {Children.map(children, (child, index) =>
        cloneElement(child, {
          tabId: index,
        }),
      )}
    </>
  );
};

export default TabPanels;
