import { useTheme } from 'styled-components';

import { BasePaperProps } from './Paper.types';
import { clickableCss } from './styles';

const BasePaper = (props: BasePaperProps) => {
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

export default BasePaper;
