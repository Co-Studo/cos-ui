import styled from 'styled-components';

import type { StyledProp } from './Text.types';

// TODO: as 를 사용하기 위해 사용하고 있는 컴포넌트이므로, Text 컴포넌트 내부에서 처리할 방법은 없는지 고민이 필요
const StyledText = styled.span<StyledProp>`
  ${({ fontCss }) => fontCss};
  ${({ ellipsis }) =>
    ellipsis && {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      display: '-webkit-box',
      WebkitLineClamp: `${ellipsis === true ? 1 : ellipsis}`,
      WebkitBoxOrient: 'vertical',
      wordBreak: 'break-word',
    }};
`;

export default StyledText;
