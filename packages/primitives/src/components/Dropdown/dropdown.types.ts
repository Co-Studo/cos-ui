import { MouseEvent, PropsWithChildren, ReactNode } from 'react';

export type DropdownItemProps = PropsWithChildren & {
  onClick?: (event?: MouseEvent<HTMLLIElement>) => void;
};

export type DropdownListProps = PropsWithChildren & {
  transformOrigin: 'left' | 'right';
};

export type DropdownTriggerProps = {
  trigger: ReactNode;
};
