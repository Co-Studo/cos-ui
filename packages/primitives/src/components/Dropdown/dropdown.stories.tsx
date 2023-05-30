import { StoryFn, Meta } from '@storybook/react';

import { Dropdown } from '.';

export default {
  title: 'Primitives/DropDown',
  component: Dropdown,
} as Meta<typeof Dropdown>;

const handleClick = () => {
  console.log('dropdown Item click');
};

export const Default: StoryFn<typeof Dropdown> = () => (
  <Dropdown>
    <Dropdown.Trigger trigger="DropDown Trigger" />
    <Dropdown.List transformOrigin="left">
      <Dropdown.Item onClick={handleClick}>DropDown Item</Dropdown.Item>
    </Dropdown.List>
  </Dropdown>
);
