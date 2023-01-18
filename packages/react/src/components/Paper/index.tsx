import { ReactNode, MouseEvent } from 'react';
import { useTheme } from 'styled-components';

import FlexBox, { FlexBoxSX } from '@components/FlexBox/flexBox';

type BasePaperSX = {
  borderRadius?: string;
  boxShadow?: string;
};

const isBasePaperProp = (prop: string): prop is keyof BasePaperSX =>
  ['borderRadius', 'boxShadow'].includes(prop);

interface FlexPaperSX extends FlexBoxSX, BasePaperSX {}

type PaperProps = FlexPaperProps;

type BasePaperProps = {
  children: ReactNode;
  onClick?: (e: MouseEvent) => void;
  sx?: BasePaperSX;
};

type FlexPaperProps = {
  children: ReactNode;
  onClick?: (e: MouseEvent) => void;
  sx?: FlexPaperSX;
};

const clickableCss = {
  cursor: 'pointer',
  margin: '0.5rem',
  transition: 'transform 0.1s ease-in-out',
  ':hover': {
    transform: 'scale(1.05)',
  },
};

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

const FlexPaper = (props: FlexPaperProps) => {
  const { children, onClick, sx = {} } = props;
  const theme = useTheme();

  const paperCss = {
    width: 'max-content',
    padding: '1rem',
    borderRadius: '0.5rem',
    boxShadow: `0 4px 10px ${theme.palette.shadow_100},
    0 0 4px ${theme.palette.shadow_500}`,
  };

  const paperSX = Object.entries(sx).reduce((css, [key, value]) => {
    if (isBasePaperProp(key)) {
      return {
        ...css,
        [key]: value,
      };
    }
    return css;
  }, {});

  const flexSX = Object.entries(sx).reduce((css, [key, value]) => {
    if (!isBasePaperProp(key)) {
      return {
        ...css,
        [key]: value,
      };
    }
    return css;
  }, {});

  return (
    <div
      onClick={onClick}
      css={{
        ...paperCss,
        ...(onClick && clickableCss),
        ...paperSX,
      }}
    >
      <FlexBox sx={flexSX}>{children}</FlexBox>
    </div>
  );
};

const Paper = (props: PaperProps) => {
  const { sx = {} } = props;

  const isFlex = Object.keys(sx).some((key) => !isBasePaperProp(key));

  return isFlex ? <FlexPaper {...props} /> : <BasePaper {...props} />;
};

export default Paper;
