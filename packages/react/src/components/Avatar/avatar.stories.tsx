import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar from './avatar';

export default {
  title: 'CATEGORY/Avatar',
  component: Avatar,
  args: {
    children: 'Avatar',
    sx: {
      backgroundColor: 'primary',
    },
  },
} as ComponentMeta<typeof Avatar>;

export const Default: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args} />
);
