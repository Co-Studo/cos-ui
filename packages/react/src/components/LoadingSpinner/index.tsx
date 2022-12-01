import styled, { css, keyframes } from 'styled-components';

type LoadingSpinnerProps = {
  size?: 'small' | 'medium' | 'large';
};

const sizeStyles = css<LoadingSpinnerProps>`
  ${({ size }) =>
    size === 'small' &&
    css`
      width: 2rem;
      height: 2rem;
      border-width: 0.3rem;
      margin-top: -1rem;
      margin-left: -1rem;
    `}

  ${({ size }) =>
    size === 'medium' &&
    css`
      width: 4rem;
      height: 4rem;
      border-width: 0.4rem;
      margin-top: -2rem;
      margin-left: -2rem;
    `}

  ${({ size }) =>
    size === 'large' &&
    css`
      width: 6rem;
      height: 6rem;
      border-width: 0.5rem;
      margin-top: -3rem;
      margin-left: -3rem;
    `}
`;

const spinnerAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledSpinner = styled.div<LoadingSpinnerProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  border: 2px solid ${({ theme }) => theme.palette.hoverColor};
  border-radius: 50%;
  border-top-color: ${({ theme }) => theme.palette.primary};
  animation: ${spinnerAnimation} 800ms ease infinite;

  /* 사이즈 */
  ${sizeStyles};
`;

const LoadingSpinner = ({ size = 'medium' }: LoadingSpinnerProps) => (
  <StyledSpinner size={size} />
);

export default LoadingSpinner;
