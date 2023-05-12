import { createContext, useContext, useState } from 'react';

import type { TabGroupProps, TabState } from './tab.types';

const TabContext = createContext<TabState | null>(null);
TabContext.displayName = 'TabContext';

export const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTabContext should be used within TabContext.Provider');
  }
  return context;
};

const TabGroup = (props: TabGroupProps) => {
  const { defaultIndex, children, ...restProps } = props;
  const activeIndexState = useState(defaultIndex || 0);

  return (
    <TabContext.Provider value={activeIndexState}>
      <div {...restProps}>{children}</div>
    </TabContext.Provider>
  );
};

export default TabGroup;
