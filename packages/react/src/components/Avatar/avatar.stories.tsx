import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar, { AvatarProps } from '@components/Avatar/avatar';
import { AVATARS } from '@constants/avatar';

export default {
  title: 'React/Avatar',
  component: Avatar,
  argTypes: {
    alt: {
      control: 'text',
      table: {
        category: 'Origin Props',
      },
    },
    src: {
      control: 'text',
      table: {
        category: 'Origin Props',
      },
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      table: {
        category: 'Origin Props',
      },
      defaultValue: 'medium',
    },
    children: {
      control: 'text',
      table: {
        category: 'Origin Props',
      },
    },
    sx: {
      control: {
        type: 'object',
        border: {
          control: { type: 'text' },
        },
      },
      table: {
        category: 'SX',
      },
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args: AvatarProps) => (
  <Avatar {...args} />
);

export const Default = Template.bind({});

export const ImageAvatar = Template.bind({});
ImageAvatar.args = {
  src: AVATARS[0].src,
  alt: AVATARS[0].name,
};

export const TextAvatar = Template.bind({});
TextAvatar.args = {
  children: 'CoStudo',
  sx: {
    backgroundColor: 'primary',
  },
};
