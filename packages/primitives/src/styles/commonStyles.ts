import { CSSObject } from 'styled-components';

export const offscreen: CSSObject = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  clipPath: 'polygon(0 0, 0 0, 0 0)',
};
