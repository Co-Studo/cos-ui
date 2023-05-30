import { StoryObj, Meta } from '@storybook/react';

import { AvatarGroup, AvatarGroupProps } from '.';

import { AVATARS, AVATARS_GROUP } from '../../constants/avatar';
import { AvatarProps } from '../Avatar';
import { FlexBox } from '../FlexBox';
import { Text } from '../Text';

export default {
  title: 'React/AvatarGroup',
  component: AvatarGroup,
  args: {
    dummyType: 'double',
    max: 5,
    spacing: 'small',
    size: 'medium',
  },
  argTypes: {
    dummyType: {
      control: 'select',
      options: ['double', 'triple', 'four'],

      table: {
        category: 'Story Options',
      },
    },
    max: {
      type: 'number',

      table: {
        category: 'AvatarGroup Props',
      },
    },
    spacing: {
      control: 'radio',
      options: ['small', 'medium', 'large'],

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
    },
    sx: {
      control: 'object',
      table: {
        category: 'Avatar Props',
      },
    },
  },
} as Meta<typeof AvatarGroup>;

interface AvatarGroupStoryProps
  extends AvatarGroupProps,
    Pick<AvatarProps, 'size' | 'sx'> {
  dummyType: string;
}

export const Default = () => (
  <>
    <FlexBox sx={{ flexDirection: 'column', gap: 1 }}>
      <Text variant="sectionTitle">Avatar Group - Small</Text>
      <AvatarGroup max={3} spacing="small" avatars={AVATARS.slice(0, 2)} />
      <AvatarGroup max={3} spacing="small" avatars={AVATARS} />
      <AvatarGroup max={3} spacing="small" avatars={AVATARS_GROUP.double} />
      <AvatarGroup max={3} spacing="small" avatars={AVATARS_GROUP.triple} />
      <AvatarGroup max={3} spacing="small" avatars={AVATARS_GROUP.four} />
    </FlexBox>
    <FlexBox sx={{ flexDirection: 'column', gap: 1 }}>
      <Text variant="sectionTitle">Avatar Group - Medium</Text>
      <AvatarGroup
        max={3}
        spacing="small"
        avatars={AVATARS.slice(0, 2)}
        size="medium"
      />
      <AvatarGroup max={3} spacing="small" avatars={AVATARS} size="medium" />
      <AvatarGroup
        max={3}
        spacing="small"
        avatars={AVATARS_GROUP.double}
        size="medium"
      />
      <AvatarGroup
        max={3}
        spacing="small"
        avatars={AVATARS_GROUP.triple}
        size="medium"
      />
      <AvatarGroup
        max={3}
        spacing="small"
        avatars={AVATARS_GROUP.four}
        size="medium"
      />
    </FlexBox>
    <FlexBox sx={{ flexDirection: 'column', gap: 1 }}>
      <Text variant="sectionTitle">Avatar Group - Large</Text>
      <AvatarGroup
        max={3}
        spacing="small"
        avatars={AVATARS.slice(0, 2)}
        size="large"
      />
      <AvatarGroup max={3} spacing="small" avatars={AVATARS} size="large" />
      <AvatarGroup
        max={3}
        spacing="small"
        avatars={AVATARS_GROUP.double}
        size="large"
      />
      <AvatarGroup
        max={3}
        spacing="small"
        avatars={AVATARS_GROUP.triple}
        size="large"
      />
      <AvatarGroup
        max={3}
        spacing="small"
        avatars={AVATARS_GROUP.four}
        size="large"
      />
    </FlexBox>
  </>
);

export const Custom: StoryObj<(props: AvatarGroupStoryProps) => JSX.Element> = {
  render: ({ dummyType, size, sx, ...args }) => (
    <AvatarGroup {...args} avatars={AVATARS_GROUP[dummyType]} />
  ),
};
