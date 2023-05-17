import { DefaultTheme } from 'styled-components';

import {
  getSpacingCssProps,
  getSpacingValue,
  isSpacingProp,
} from '../../styles/spacing';
import type { FlexBoxSX } from './FlexBox.types';

export const getFlexCssProperties = (sx: FlexBoxSX, theme: DefaultTheme) =>
  Object.entries(sx).reduce((css, [key, value]) => {
    switch (true) {
      case key === 'bgColor':
        return {
          ...css,
          backgroundColor: theme.palette[value],
        };
      case key === 'gap':
        return {
          ...css,
          gap: getSpacingValue(value),
        };
      case isSpacingProp(key):
        return { ...css, ...getSpacingCssProps(key, value) };
      default:
        return { ...css, [key]: value };
    }
  }, {});
