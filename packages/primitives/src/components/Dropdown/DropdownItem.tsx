import { DropdownItemProps } from './dropdown.types';

const DropdownItem = (props: DropdownItemProps) => {
  const { children, ...restProps } = props;
  return <li {...restProps}>{children}</li>;
};

export default DropdownItem;
