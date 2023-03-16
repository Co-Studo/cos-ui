import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar } from '@components/Avatar';
import StyledDropdown from '@components/Dropdown';

export default {
  title: 'React/DropDown',
  component: StyledDropdown,
} as ComponentMeta<typeof StyledDropdown>;

const handleLogoutClick = () => {
  console.log('logout clicked!');
};

export const Default: ComponentStory<typeof StyledDropdown> = () => (
  <StyledDropdown>
    <StyledDropdown.Trigger
      trigger={
        <Avatar
          src="https://user-images.githubusercontent.com/62706988/203609246-bda4fa49-e490-4bcb-a886-ccac3af7d24f.svg"
          alt="avatar"
        />
      }
    />
    <StyledDropdown.List transformOrigin="left">
      <StyledDropdown.Item onClick={handleLogoutClick}>
        로그아웃
      </StyledDropdown.Item>
    </StyledDropdown.List>
  </StyledDropdown>
);
