import { useTheme } from 'styled-components';

import { getCustomStyle } from './helpers';
import StyledText from './StyledText';
import type { HighlightProps } from './Text.types';

const TextHighlight = (props: HighlightProps) => {
  const { sx = {}, as = 'strong', children } = props;
  const theme = useTheme();
  const fontCss = getCustomStyle(sx, theme);

  return (
    <StyledText as={as} fontCss={fontCss}>
      {children}
    </StyledText>
  );
};

export default TextHighlight;
