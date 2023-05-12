import { createContext, Dispatch, useContext, useReducer } from 'react';
import { css } from 'styled-components';

import type {
  ClickAwayAction,
  ClickAwayProps,
  ClickAwayState,
} from './clickAway.types';

const reducer = (state: ClickAwayState, action: ClickAwayAction) => {
  switch (action.type) {
    case 'TOGGLE_OPEN_AWAY':
      return { isOpen: !state.isOpen };
    default:
      return state;
  }
};

const initState = {
  isOpen: false,
};

const ClickAwayContext = createContext<
  [ClickAwayState, Dispatch<ClickAwayAction>]
>([initState, () => {}]);
ClickAwayContext.displayName = 'ClickAwayContext';

export const useClickAwayContext = () => {
  const context = useContext(ClickAwayContext);
  if (!context) {
    throw new Error(
      'useClickAwayContext should be used within ClickAwayContext.Provider',
    );
  }
  return context;
};

const ClickAway = (props: ClickAwayProps) => {
  const { children } = props;
  const clickAwayReducer = useReducer(reducer, initState);
  const [state, dispatch] = clickAwayReducer;

  return (
    <ClickAwayContext.Provider value={clickAwayReducer}>
      <div
        css={css`
          &::before {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            content: '';
            z-index: 90;
            display: ${state.isOpen ? 'block' : 'none'};
          }
        `}
        onClick={() => {
          dispatch({ type: 'TOGGLE_OPEN_AWAY' });
        }}
      >
        {children}
      </div>
    </ClickAwayContext.Provider>
  );
};

export default ClickAway;
