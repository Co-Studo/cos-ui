import { Avatar, AvatarGroup, FlexBox, Text } from '@cos-ui/react';

import AVATARS from '@constants/avatar';

const AvatarPage = () => (
  <>
    <FlexBox sx={{ flexDirection: 'column', gap: 1, mb: 2 }}>
      <Text variant="sectionTitle">Avatar</Text>
      <Avatar
        src={AVATARS[0].src}
        alt={AVATARS[0].name}
        sx={{ width: '4rem', height: '4rem' }}
      />
    </FlexBox>
    <FlexBox sx={{ flexDirection: 'column', gap: 1 }}>
      <Text variant="sectionTitle">Avatar Group</Text>
      <AvatarGroup flexAlign="flex-end" max={3} spacing="small">
        {AVATARS.slice(0, 2).map((avatar) => (
          <Avatar
            key={avatar.id}
            src={avatar.src}
            alt={avatar.name}
            sx={{ width: '4.2rem', height: '4.2rem' }}
          />
        ))}
      </AvatarGroup>
      <AvatarGroup flexAlign="flex-end" max={3} spacing="small">
        {AVATARS.map((avatar) => (
          <Avatar
            key={avatar.id}
            src={avatar.src}
            alt={avatar.name}
            sx={{ width: '4.2rem', height: '4.2rem' }}
          />
        ))}
      </AvatarGroup>
    </FlexBox>
  </>
);

export default AvatarPage;
