import DropdownRoot from './dropdown';
import Item from './DropdownItem';
import List from './DropdownList';
import Trigger from './DropdownTrigger';

const Dropdown = Object.assign(DropdownRoot, {
  Trigger,
  List,
  Item,
});

export { Dropdown };
export * from './dropdown.types';
