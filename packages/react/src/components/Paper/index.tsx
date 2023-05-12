import { ReactNode, MouseEvent } from 'react';
import { useTheme } from 'styled-components';

import { FlexBox, FlexBoxSX } from '../FlexBox';

type BasePaperSX = {
  borderRadius?: string;
  boxShadow?: string;
};

const isBasePaperProp = (prop: string): prop is keyof BasePaperSX =>
  ['borderRadius', 'boxShadow'].includes(prop);

export interface FlexPaperSX extends FlexBoxSX, BasePaperSX {}

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

/**
 *
 * @name Paper
 * @description `border-radius` 와 `box-shadow` 를 가진 Container 컴포넌트입니다.
 * @props sx - `Paper` 의 스타일을 정의하는 객체입니다. `FlexBox` 의 `sx` 를 사용하면 `FlexBox` 가 적용됩니다.
 * @props onClick - `onClick` 이벤트를 받으면 Clickable CSS가 적용됩니다.
 * @example
 * ```tsx
 *   <Paper
 *     onClick={() => {...}}
 *     sx={{
 *       borderRadius: '1rem',
 *       gap: 2,
 *     }}
 *   >
 *     <Text>Clickable Paper</Text>
 *     <Text>Clickable Paper</Text>
 *     <Text>Clickable Paper</Text>
 *   </Paper>
 * ```
 */
const Paper = (props: PaperProps) => {
  const { sx = {} } = props;

  const isFlex = Object.keys(sx).some((key) => !isBasePaperProp(key));

  return isFlex ? <FlexPaper {...props} /> : <BasePaper {...props} />;
};

export default Paper;
