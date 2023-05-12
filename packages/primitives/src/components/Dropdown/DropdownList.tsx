import { css } from 'styled-components';

import { useClickAwayContext } from '../ClickAway';
import { useDropdownContext } from './dropdown';
import { DropdownListProps } from './dropdown.types';

const DropdownList = (props: DropdownListProps) => {
  const [{ isOpen }] = useClickAwayContext();
  const [{ triggerHeight }] = useDropdownContext();
  const { children, transformOrigin = 'left' } = props;

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

export default DropdownList;
