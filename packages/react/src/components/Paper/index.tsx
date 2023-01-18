import { ReactNode, MouseEvent } from 'react';
import { useTheme } from 'styled-components';

import { SpacingSX } from '@styles/spacing';

interface PaperSX extends SpacingSX {
  width?: string;
  height?: string;
  borderRadius?: string;
  boxShadow?: string;
}

type PaperProps = {
  children: ReactNode;
  onClick?: (e: MouseEvent) => void;
  sx?: PaperSX;
};

const clickableCss = {
  cursor: 'pointer',
  margin: '0.5rem',
  transition: 'transform 0.1s ease-in-out',
  ':hover': {
    transform: 'scale(1.05)',
  },
};

const Paper = (props: PaperProps) => {
  const { children, onClick, sx } = props;
  const theme = useTheme();

  const paperCss = {
    width: 'max-content',
    padding: '1rem',
    borderRadius: '0.5rem',
    boxShadow: `0 4px 10px ${theme.palette.shadow_100},
    0 0 4px ${theme.palette.shadow_500}`,
  };

  return (
    <div
      onClick={onClick}
      css={{
        ...paperCss,
        ...(onClick && clickableCss),
        ...sx,
      }}
    >
      {children}
    </div>
  );
};

export default Paper;
