import { DefaultTheme } from 'styled-components';

import fonts from '../../styles/fonts';
import { getSpacingCssProps, isSpacingProp } from '../../styles/spacing';
import { TextSX } from './Text.types';

export const getCustomStyle = (sx: TextSX, theme: DefaultTheme) =>
  Object.entries(sx).reduce((css, [key, value]) => {
    switch (true) {
      case key === 'color':
        return { ...css, color: theme.palette[value] };
      case isSpacingProp(key):
        return { ...css, ...getSpacingCssProps(key, value) };
      default:
        return { ...css, [key]: fonts[key][value] };
    }
  }, {});
