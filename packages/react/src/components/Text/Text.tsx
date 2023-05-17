import { useTheme } from 'styled-components';

import { typography } from '../../styles/typography';
import { getCustomStyle } from './helpers';
import StyledText from './StyledText';
import type { TextProps } from './Text.types';

const element = {
  logo: 'h1',
  sectionTitle: 'h2',
  sectionDescription: 'p',
  articleTitle: 'h3',
  articleDescription: 'p',
};

const Text = (props: TextProps) => {
  const { variant, sx = {}, as, ellipsis, children } = props;
  const theme = useTheme();
  const getVariantStyle = () => variant && typography[variant];
  const fontCss = {
    ...getVariantStyle(),
    ...getCustomStyle(sx, theme),
  };

  return (
    <StyledText
      as={as || (variant && element[variant])}
      fontCss={fontCss}
      ellipsis={ellipsis}
    >
      {children}
    </StyledText>
  );
};

export default Text;
