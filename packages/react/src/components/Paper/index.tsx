import { ReactNode } from 'react';
import { CSSObject, useTheme } from 'styled-components';

type PaperProps = {
  children: ReactNode;
  sx?: CSSObject;
};

const Paper = ({ children, sx }: PaperProps) => {
  const theme = useTheme();
  return (
    <div
      css={{
        width: 'max-content',
        padding: '1rem',
        borderRadius: '0.5rem',
        boxShadow: `0 4px 10px ${theme.palette.shadow_100},
        0 0 4px ${theme.palette.shadow_500}`,
        ...sx,
      }}
    >
      {children}
    </div>
  );
};

export default Paper;
