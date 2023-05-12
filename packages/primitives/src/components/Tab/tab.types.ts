import type {
  Dispatch,
  MouseEvent,
  PropsWithChildren,
  ReactElement,
  SetStateAction,
} from 'react';

export type TabPropsType = PropsWithChildren & {
  tabId?: number;
  onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
};

export type TabState = [
  activeIndex: number,
  setActiveIndex: Dispatch<SetStateAction<number>>,
];

export type TabGroupProps = PropsWithChildren & {
  defaultIndex?: number;
};

// children 이 무조건 배열이어야 한다는 Type 을 별도로 만드는건 어떨까요? PropsWithIterableChildren 이런 식으로요
export type TabListProps = {
  children: ReactElement[];
};

export type TabPanelProps = PropsWithChildren & {
  tabId?: number;
};

export type TabPanelsProps = {
  children: ReactElement[];
};
