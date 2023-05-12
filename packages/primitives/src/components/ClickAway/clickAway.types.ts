import { PropsWithChildren } from 'react';

export type ClickAwayState = {
  isOpen: boolean;
};

export type ClickAwayAction = { type: 'TOGGLE_OPEN_AWAY' };

export type ClickAwayProps = PropsWithChildren;
