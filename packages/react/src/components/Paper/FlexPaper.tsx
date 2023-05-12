import { useTheme } from 'styled-components';

import { FlexBox } from '../FlexBox';
import { FlexPaperProps, isBasePaperProp } from './Paper.types';
import { clickableCss } from './styles';

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

export default FlexPaper;
