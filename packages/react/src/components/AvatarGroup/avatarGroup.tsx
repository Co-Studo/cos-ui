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

/**
 *
 * @name AvatarGroup
 * @description `AvatarGroup` 은 `avatars:AvatarProp[]` 를 prop 으로 전달받아 `Avatar` 컴포넌트 목록을 보여줍니다.
 * @props `max` : `Avatar` 가 보여질 최대 갯수를 지정합니다. `default: 5`
 * @props `spacing` : `Avatar` 간의 간격을 `small`, `medium`, `large` 중 선택할 수 있습니다. `default: small`
 * @props `size` : `small`, `medium`, `large` 중 선택할 수 있습니다. `default: small`
 * @props `avatars` : Avatar 의 정보를 담는 배열을 입력합니다. ex) AvatarProps[]
 * @example
 * ```tsx
 *  <AvatarGroup max={3} spacing="small" avatars={AVATARS} />
 * ```
 */
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
