import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Dropdown } from '.';

import { Avatar } from '../Avatar';

export default {
  title: 'React/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const handleLogoutClick = () => {
  console.log('logout clicked!');
};

export const Default: ComponentStory<typeof Dropdown> = () => (
  <Dropdown>
    <Dropdown.Trigger
      trigger={
        <Avatar
          src="https://user-images.githubusercontent.com/62706988/203609246-bda4fa49-e490-4bcb-a886-ccac3af7d24f.svg"
          alt="avatar"
        />
      }
    />
    <Dropdown.List transformOrigin="left">
      <Dropdown.Item onClick={handleLogoutClick}>로그아웃</Dropdown.Item>
    </Dropdown.List>
  </Dropdown>
);
