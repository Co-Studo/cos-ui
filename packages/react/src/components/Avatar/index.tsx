import { ReactNode } from 'react';

export type AvatarProps = {
  sx?: object;
  alt?: string;
  src?: string;
  children?: ReactNode;
  className?: string;
};

const Avatar = (props: AvatarProps) => {
  const { alt, src, sx, children, className } = props;

  const css = {
    width: '2.4rem',
    height: '2.4rem',
    borderRadius: '50%',
    ...sx,
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
