import { useRef } from 'react';

import { useDropdownContext } from './dropdown';
import { DropdownTriggerProps } from './dropdown.types';

const DropdownTrigger = (props: DropdownTriggerProps) => {
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

export default DropdownTrigger;
