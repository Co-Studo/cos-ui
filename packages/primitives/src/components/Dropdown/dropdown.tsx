import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useReducer,
} from 'react';
import { css } from 'styled-components';

import { ClickAway } from '../ClickAway';

type DropdownState = {
  triggerHeight: number;
};

type DropdownAction = { type: 'UPDATE_TRIGGER_HEIGHT'; height: number };

const reducer = (state: DropdownState, action: DropdownAction) => {
  switch (action.type) {
    case 'UPDATE_TRIGGER_HEIGHT': {
      return {
        ...state,
        triggerHeight: action.height,
      };
    }
    default:
      return state;
  }
};

const initState = {
  triggerHeight: 0,
};

const DropdownContext = createContext<
  [DropdownState, Dispatch<DropdownAction>]
>([initState, () => {}]);
DropdownContext.displayName = 'DropdownContext';

export const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error(
      'useDropdownContext should be used within DropdownContext.Provider',
    );
  }
  return context;
};

type DropdownProps = PropsWithChildren;

const Dropdown = (props: DropdownProps) => {
  const { children } = props;
  const dropdownReducer = useReducer(reducer, initState);
  return (
    <ClickAway>
      <DropdownContext.Provider value={dropdownReducer}>
        <div
          css={css`
            position: relative;
          `}
        >
          {children}
        </div>
      </DropdownContext.Provider>
    </ClickAway>
  );
};

export default Dropdown;
