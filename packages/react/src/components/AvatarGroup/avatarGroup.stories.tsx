import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar, { AvatarProps } from '@components/Avatar/avatar';
import AvatarGroup, {
  AvatarGroupProps,
} from '@components/AvatarGroup/avatarGroup';
import { FlexBox } from '@components/FlexBox';
import Text from '@components/Text';
import { AVATARS, AVATARS_GROUP } from '@constants/avatar';

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
      <AvatarGroup max={3} spacing="small">
        {AVATARS.slice(0, 2).map((avatar) => (
          <Avatar
            key={avatar.id}
            src={avatar.src}
            alt={avatar.name}
            size="small"
          />
        ))}
      </AvatarGroup>
      <AvatarGroup max={3} spacing="small">
        {AVATARS.map((avatar) => (
          <Avatar
            key={avatar.id}
            src={avatar.src}
            alt={avatar.name}
            size="small"
          />
        ))}
      </AvatarGroup>
      <AvatarGroup max={3} spacing="small">
        {AVATARS_GROUP.double.map((avatar) => (
          <Avatar
            key={avatar.id}
            src={avatar.src}
            alt={avatar.name}
            size="small"
          />
        ))}
      </AvatarGroup>
      <AvatarGroup max={3} spacing="small">
        {AVATARS_GROUP.triple.map((avatar) => (
          <Avatar
            key={avatar.id}
            src={avatar.src}
            alt={avatar.name}
            size="small"
          />
        ))}
      </AvatarGroup>
      <AvatarGroup max={3} spacing="small">
        {AVATARS_GROUP.four.map((avatar) => (
          <Avatar
            key={avatar.id}
            src={avatar.src}
            alt={avatar.name}
            size="small"
          />
        ))}
      </AvatarGroup>
    </FlexBox>
    <FlexBox sx={{ flexDirection: 'column', gap: 1 }}>
      <Text variant="sectionTitle">Avatar Group - Medium</Text>
      <AvatarGroup max={3} spacing="small">
        {AVATARS.slice(0, 2).map((avatar) => (
          <Avatar key={avatar.id} src={avatar.src} alt={avatar.name} />
        ))}
      </AvatarGroup>
      <AvatarGroup max={3} spacing="small">
        {AVATARS.map((avatar) => (
          <Avatar key={avatar.id} src={avatar.src} alt={avatar.name} />
        ))}
      </AvatarGroup>
      <AvatarGroup max={3} spacing="small">
        {AVATARS_GROUP.double.map((avatar) => (
          <Avatar key={avatar.id} src={avatar.src} alt={avatar.name} />
        ))}
      </AvatarGroup>
      <AvatarGroup max={3} spacing="small">
        {AVATARS_GROUP.triple.map((avatar) => (
          <Avatar key={avatar.id} src={avatar.src} alt={avatar.name} />
        ))}
      </AvatarGroup>
      <AvatarGroup max={3} spacing="small">
        {AVATARS_GROUP.four.map((avatar) => (
          <Avatar key={avatar.id} src={avatar.src} alt={avatar.name} />
        ))}
      </AvatarGroup>
    </FlexBox>
    <FlexBox sx={{ flexDirection: 'column', gap: 1 }}>
      <Text variant="sectionTitle">Avatar Group - Large</Text>
      <AvatarGroup max={3} spacing="small">
        {AVATARS.slice(0, 2).map((avatar) => (
          <Avatar
            key={avatar.id}
            src={avatar.src}
            alt={avatar.name}
            size="large"
          />
        ))}
      </AvatarGroup>
      <AvatarGroup max={3} spacing="small">
        {AVATARS.map((avatar) => (
          <Avatar
            key={avatar.id}
            src={avatar.src}
            alt={avatar.name}
            size="large"
          />
        ))}
      </AvatarGroup>
      <AvatarGroup max={3} spacing="small">
        {AVATARS_GROUP.double.map((avatar) => (
          <Avatar
            key={avatar.id}
            src={avatar.src}
            alt={avatar.name}
            size="large"
          />
        ))}
      </AvatarGroup>
      <AvatarGroup max={3} spacing="small">
        {AVATARS_GROUP.triple.map((avatar) => (
          <Avatar
            key={avatar.id}
            src={avatar.src}
            alt={avatar.name}
            size="large"
          />
        ))}
      </AvatarGroup>
      <AvatarGroup max={3} spacing="small">
        {AVATARS_GROUP.four.map((avatar) => (
          <Avatar
            key={avatar.id}
            src={avatar.src}
            alt={avatar.name}
            size="large"
          />
        ))}
      </AvatarGroup>
    </FlexBox>
  </>
);

export const Custom: ComponentStory<
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
