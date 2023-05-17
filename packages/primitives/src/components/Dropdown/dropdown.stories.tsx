import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Dropdown } from '.';

export default {
  title: 'Primitives/DropDown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const handleClick = () => {
  console.log('dropdown Item click');
};

export const Default: ComponentStory<typeof Dropdown> = () => (
  <Dropdown>
    <Dropdown.Trigger trigger="DropDown Trigger" />
    <Dropdown.List transformOrigin="left">
      <Dropdown.Item onClick={handleClick}>DropDown Item</Dropdown.Item>
    </Dropdown.List>
  </Dropdown>
);
