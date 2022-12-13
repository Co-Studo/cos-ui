import { useTheme } from 'styled-components';

import Text from '@components/Text';
import { SpacingSX } from '@styles/spacing';
import { Palette } from '@styles/theme';

type AvatarSize = 'small' | 'medium' | 'large';

interface AvatarSX extends SpacingSX {
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
            .split(' ')
            .slice(0, 4)
            .map((string) => string[0])
            .join('')
        : children;

    return (
      <div
        // Style extand 를 위해 추가
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
