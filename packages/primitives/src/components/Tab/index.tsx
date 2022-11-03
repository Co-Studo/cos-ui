import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
  Children,
  cloneElement,
  ReactNode,
  ReactElement,
} from 'react';

type TabState = [
  activeIndex: number,
  setActiveIndex: Dispatch<SetStateAction<number>>,
];

const TabContext = createContext<TabState | null>(null);
TabContext.displayName = 'TabContext';

const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTabContext should be used within TabContext.Provider');
  }
  return context;
};

type TabGroupProps = {
  defaultIndex?: number;
  children: ReactNode;
};

const TabGroup = ({ defaultIndex, children, ...restProps }: TabGroupProps) => {
  const activeIndexState = useState(defaultIndex || 0);

  return (
    <TabContext.Provider value={activeIndexState}>
      <div {...restProps}>{children}</div>
    </TabContext.Provider>
  );
};

type TabListProps = {
  children: ReactElement[];
};

const TabList = ({ children, ...restProps }: TabListProps) => (
  <ul {...restProps}>
    {Children.map(children, (child, index) =>
      cloneElement(child, {
        tabId: index,
      }),
    )}
  </ul>
);

type TabPropsType = {
  tabId?: number;
  children: ReactNode;
};

const Tab = ({ tabId, children, ...restProps }: TabPropsType) => {
  const [activeIndex, setActiveIndex] = useTabContext();
  const isActive = activeIndex === tabId;

  const handleTabClick = () => tabId !== undefined && setActiveIndex(tabId);

  return (
    <li {...restProps} data-selected={isActive}>
      <button type="button" onClick={handleTabClick}>
        {children}
      </button>
    </li>
  );
};

type TabPanelsProps = {
  children: ReactElement[];
};

const TabPanels = ({ children }: TabPanelsProps) => (
  <>
    {Children.map(children, (child, index) =>
      cloneElement(child, {
        tabId: index,
      }),
    )}
  </>
);

type TabPanelProps = {
  tabId?: number;
  children: ReactNode;
};

const TabPanel = ({ tabId, children, ...restProps }: TabPanelProps) => {
  const [activeIndex] = useTabContext();
  const isActive = activeIndex === tabId;

  return isActive ? <div {...restProps}>{children}</div> : null;
};

Tab.Group = TabGroup;
Tab.List = TabList;
Tab.Panels = TabPanels;
Tab.Panel = TabPanel;

export default Tab;
