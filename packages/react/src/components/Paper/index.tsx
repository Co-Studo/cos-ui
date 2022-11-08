import { ReactNode } from 'react';
import { CSSObject } from 'styled-components';

import colors from '@styles/colors';

type PaperProps = {
  children: ReactNode;
  sx?: CSSObject;
};

const Paper = ({ children, sx }: PaperProps) => (
  <div
    css={{
      width: 'max-content',
      padding: '1rem',
      borderRadius: '0.5rem',
      boxShadow: `0 4px 10px ${colors.greyOpacity100},
        0 0 4px ${colors.greyOpacity500}`,
      ...sx,
    }}
  >
    {children}
  </div>
);

export default Paper;
