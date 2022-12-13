import { ReactNode } from 'react';
import { useTheme } from 'styled-components';

import { SpacingSX } from '@styles/spacing';
import { Palette } from '@styles/theme';

type AvatarSize = 'small' | 'medium' | 'large';

interface AvatarSX extends SpacingSX {
  border?: string;
  borderRadius?: string;
  backgroundColor?: keyof Palette;
}

export type AvatarProps = {
  sx?: AvatarSX;
  alt?: string;
  src?: string;
  size?: AvatarSize;
  children?: ReactNode;
  className?: string;
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
  const {
    alt,
    src,
    sx = { backgroundColor: 'neutral_2' },
    size = 'medium',
    children,
    className,
  } = props;

  const { backgroundColor, ...restSX } = sx;

  const css = {
    borderRadius: '50%',
    backgroundColor: theme.palette[backgroundColor as keyof Palette],
    ...getSizeStyle(size),
    ...restSX,
  };

  if (!src) {
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
        {children}
      </div>
    );
  }

  return <img css={css} src={src} alt={alt} />;
};

export default Avatar;
