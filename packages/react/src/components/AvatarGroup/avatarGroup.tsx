import styled, { useTheme } from 'styled-components';

import Avatar, { AvatarProps } from '@components/Avatar/avatar';
import FlexBox from '@components/FlexBox/flexBox';

export type AvatarGroupProps = {
  avatars: AvatarProps[];
  max?: number;
  spacing?: 'small' | 'medium' | 'large';
  size?: 'small' | 'medium' | 'large';
};

const SPACING_OPTIONS = {
  small: '-1.5rem',
  medium: '-1rem',
  large: '-0.5rem',
};

const MAX_VIEW_COUNT = 999;

const RestInfoAvatar = styled(Avatar)<Partial<AvatarGroupProps>>`
  border: 2px solid ${({ theme }) => theme.palette.white};
  background-color: ${({ theme }) => theme.palette.neutral_2};
  color: ${({ theme }) => theme.palette.white};
  padding: 2px 3px 0 0;
  margin-left: ${({ spacing }) => spacing && SPACING_OPTIONS[spacing]};
  &:first-child {
    margin-left: 0;
  }
`;

const AvatarGroup = (props: AvatarGroupProps) => {
  const { avatars, size = 'small', max = 5, spacing = 'small' } = props;
  const theme = useTheme();

  const total = avatars.length;
  const isOverMax = total > max;
  const slicedAvatars = isOverMax ? avatars.slice(0, max - 1) : avatars;

  return (
    <FlexBox>
      {slicedAvatars.slice(0, max - 1).map((avatar, index) => (
        <Avatar
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          size={size}
          {...avatar}
          sx={{
            ...(avatar.sx ? avatar.sx : {}),
            border: `2px solid ${theme.palette.white}`,
            ...(index === 0 ? {} : { marginLeft: SPACING_OPTIONS[spacing] }),
          }}
        />
      ))}
      {isOverMax && (
        <RestInfoAvatar spacing={spacing} size={size}>
          {`+${
            total - max + 1 <= MAX_VIEW_COUNT ? total - max + 1 : MAX_VIEW_COUNT
          }`}
        </RestInfoAvatar>
      )}
    </FlexBox>
  );
};

export default AvatarGroup;
