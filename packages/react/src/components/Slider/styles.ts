import { css } from 'styled-components';

export const SliderButtonCSS = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 1.6rem;
  & > svg {
    display: block;
  }
  &:disabled > svg path {
    stroke: ${({ theme }) => theme.palette.neutral_1_dark};
  }
  &:disabled {
    color: ${({ theme }) => theme.palette.neutral_1_dark};
  }
`;
