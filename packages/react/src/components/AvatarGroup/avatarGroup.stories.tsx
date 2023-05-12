import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AVATARS, AVATARS_GROUP } from '../../constants/avatar';
import { AvatarProps } from '../Avatar';
import { FlexBox } from '../FlexBox';
import { Text } from '../Text';
import AvatarGroup, { AvatarGroupProps } from './avatarGroup';

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

export const Custom: ComponentStory<
  (props: AvatarGroupStoryProps) => JSX.Element
> = ({ dummyType, size, sx, ...args }) => (
  <AvatarGroup {...args} avatars={AVATARS_GROUP[dummyType]} />
);
