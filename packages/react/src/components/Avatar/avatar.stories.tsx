import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar, AvatarProps } from '.';

import { AVATARS } from '../../constants/avatar';
import { FlexBox } from '../FlexBox';
import { Text } from '../Text';

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

export const Default = () => (
  <FlexBox sx={{ flexDirection: 'column', gap: 5, mb: 10 }}>
    <Text variant="sectionTitle">Avatar</Text>
    <Avatar src={AVATARS[0].src} alt={AVATARS[0].name} size="small" />
    <Avatar src={AVATARS[0].src} alt={AVATARS[0].name} />
    <Avatar src={AVATARS[0].src} alt={AVATARS[0].name} size="large" />
    <Avatar
      src={AVATARS[0].src}
      alt={AVATARS[0].name}
      sx={{ width: '10rem', height: '10rem' }}
    />
    <Avatar sx={{ backgroundColor: 'primary' }} size="small">
      박
    </Avatar>
    <Avatar sx={{ backgroundColor: 'primary' }}>박상진</Avatar>
    <Avatar sx={{ backgroundColor: 'primary' }}>박상진박박</Avatar>
    <Avatar sx={{ backgroundColor: 'primary' }} size="large">
      Emma Stone Emma Watson Emma What
    </Avatar>
  </FlexBox>
);

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
