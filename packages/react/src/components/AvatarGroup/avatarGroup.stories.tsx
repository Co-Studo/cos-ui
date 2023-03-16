import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar, { AvatarProps } from '@components/Avatar/avatar';
import AvatarGroup, {
  AvatarGroupProps,
} from '@components/AvatarGroup/avatarGroup';
import { AVATARS_GROUP } from '@constants/avatar';

export default {
  title: 'React/AvatarGroup',
  component: AvatarGroup,
  argTypes: {
    dummyType: {
      control: 'select',
      options: ['double', 'triple', 'four'],
      defaultValue: 'double',
      table: {
        category: 'Story Options',
      },
    },
    max: {
      type: 'number',
      defaultValue: 5,
      table: {
        category: 'AvatarGroup Props',
      },
    },
    spacing: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      defaultValue: 'small',
      table: {
        category: 'AvatarGroup Props',
      },
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      table: {
        category: 'Avatar Props',
      },
      defaultValue: 'medium',
    },
    sx: {
      control: 'object',
      table: {
        category: 'Avatar Props',
      },
    },
  },
} as ComponentMeta<typeof AvatarGroup>;

interface AvatarGroupStoryProps
  extends AvatarGroupProps,
    Pick<AvatarProps, 'size' | 'sx'> {
  dummyType: string;
}

const Template: ComponentStory<
  (props: AvatarGroupStoryProps) => JSX.Element
> = ({ dummyType, size, sx, ...args }) => (
  <AvatarGroup {...args}>
    {AVATARS_GROUP[dummyType].map((avatar) => (
      <Avatar
        key={avatar.id}
        src={avatar.src}
        alt={avatar.name}
        size={size}
        sx={sx}
      />
    ))}
  </AvatarGroup>
);

export const Default = Template.bind({});
