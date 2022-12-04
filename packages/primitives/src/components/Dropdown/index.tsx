import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
  useRef,
  MouseEvent,
} from 'react';
import { css } from 'styled-components';

import ClickAway, { useClickAwayContext } from '@components/ClickAway';

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

const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error(
      'useDropdownContext should be used within DropdownContext.Provider',
    );
  }
  return context;
};

type DropdownProps = {
  children: ReactNode;
};

const Dropdown = ({ children }: DropdownProps) => {
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

const DropdownTrigger = (props: { trigger: ReactNode }) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [, dispatch] = useDropdownContext();
  const { trigger } = props;

  const handleTrigger = () => {
    if (!triggerRef.current) return;
    dispatch({
      type: 'UPDATE_TRIGGER_HEIGHT',
      height: triggerRef.current.offsetHeight,
    });
  };

  return (
    <button type="button" onClick={handleTrigger} ref={triggerRef}>
      {trigger}
    </button>
  );
};

type DropdownListProps = {
  transformOrigin: 'left' | 'right';
  children: ReactNode;
};

const DropdownList = (props: DropdownListProps) => {
  const [{ isOpen }] = useClickAwayContext();
  const [{ triggerHeight }] = useDropdownContext();
  const { children, transformOrigin } = props;

  return isOpen ? (
    <ul
      css={css`
        width: max-content;
        position: absolute;
        top: ${triggerHeight}px;
        ${transformOrigin === 'right'
          ? css`
              right: 0;
            `
          : css`
              left: 0;
            `}
        z-index: 100;
      `}
      {...props}
    >
      {children}
    </ul>
  ) : null;
};

type DropdownItemProps = {
  children: ReactNode;
  onClick?: (event?: MouseEvent<HTMLLIElement>) => void;
};

const DropdownItem = (props: DropdownItemProps) => {
  const { children, ...restProps } = props;
  return <li {...restProps}>{children}</li>;
};

Dropdown.Trigger = DropdownTrigger;
Dropdown.List = DropdownList;
Dropdown.Item = DropdownItem;

export default Dropdown;
