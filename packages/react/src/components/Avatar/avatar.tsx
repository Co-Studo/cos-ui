import { useTheme } from 'styled-components';

import Text from '@components/Text';
import { SizeSX } from '@styles/size';
import { SpacingSX } from '@styles/spacing';
import { Palette } from '@styles/theme';

type AvatarSize = 'small' | 'medium' | 'large';

interface AvatarSX extends SpacingSX, SizeSX {
  border?: string;
  borderRadius?: string;
  backgroundColor?: keyof Palette;
  color?: keyof Palette;
}

export type AvatarProps = {
  sx?: AvatarSX;
  alt?: string;
  src?: string;
  size?: AvatarSize;
  children?: string;
  className?: string;
};

const FONT_SIZE_BY_STRING_LEN = {
  small: {
    1: 'small',
    2: 'small',
    3: 'xSmall',
    4: 'xxSmall',
  },
  medium: {
    1: 'medium',
    2: 'medium',
    3: 'small',
    4: 'xSmall',
  },
  large: {
    1: 'large',
    2: 'large',
    3: 'medium',
    4: 'small',
  },
};

const getSizeStyle = (size: AvatarSize) => {
  switch (size) {
    case 'small':
      return {
        width: '3.2rem',
        height: '3.2rem',
      };
    case 'medium':
      return {
        width: '4.2rem',
        height: '4.2rem',
      };
    case 'large':
      return {
        width: '5.2rem',
        height: '5.2rem',
      };
    default:
      return {
        width: '4.2rem',
        height: '4.2rem',
      };
  }
};

/**
 *
 * @name Avatar
 * @description `src` 속성에 이미지를 넣는 경우 `size` 에 맞는 크기로 동그란 컴포넌트가 생성됩니다.
만약 `src` 가 지정되지 않고, `children` 으로 문자열 을 사용하는 경우 글자수에 맞게 문자열 아바타가 생성됩니다.
 * @props `src` : `Avatar` 에 적용할 이미지의 경로를 입력합니다.
 * @props `alt` : 이미지의 텍스트 설명입니다.
 * @props `size` : `small`, `medium`, `large` 중 선택할 수 있습니다. `default: medium`
 * @props `sx` : `border`, `borderRadius`, `backgroundColor`, `color` 이외 `Spacing`, `Size` 관련 속성을 활용할 수 있습니다.
 * @example
 * ```tsx
 *  <Avatar src={image.src} alt={image.name} size="large" />
 *  <Avatar sx={{ backgroundColor: 'primary' }}>박상진</Avatar>
 * ```
 */
const Avatar = (props: AvatarProps) => {
  const theme = useTheme();
  const { alt, src, sx = {}, size = 'medium', children, className } = props;

  const { backgroundColor = 'neutral_2', color = 'white', ...restSX } = sx;

  const css = {
    borderRadius: '50%',
    backgroundColor: theme.palette[backgroundColor as keyof Palette],
    ...getSizeStyle(size),
    ...restSX,
  };

  if (!src && children) {
    const sliceChildren =
      children.length > 4
        ? children
            .split(' ') // 문자열의 공백을 기준으로 자름
            .slice(0, 4) // 최대 4개 까지만 허용
            .map((string) => string[0]) // 각 문자열의 첫 단어로 변경
            .join('') // ex) 'Park Jamie Hemdi Dony Crong' -> 'PJHD'
        : children;

    return (
      <div
        // Style extend 를 위해 추가
        // https://styled-components.com/docs/basics#styling-any-component
        className={className}
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ...css,
        }}
      >
        <Text
          sx={{
            fontSize: FONT_SIZE_BY_STRING_LEN[size][sliceChildren.length],
            color,
          }}
        >
          {sliceChildren}
        </Text>
      </div>
    );
  }

  return <img css={css} src={src} alt={alt} />;
};

export default Avatar;
