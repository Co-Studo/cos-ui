import { Dropdown as DropdownRoot } from '@cos-ui/primitives';

import DropdownItem from './DropdownItem';
import DropdownList from './DropdownList';

const Dropdown = Object.assign(DropdownRoot, {
  List: DropdownList,
  Item: DropdownItem,
});

export { Dropdown };
