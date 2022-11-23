import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

import Text from '@components/Text';
import colors from '@styles/colors';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit';
  color?: 'primary' | 'secondary' | 'danger' | 'neutral' | 'github';
  shape?: 'round' | 'rect';
  size?: 'small' | 'medium' | 'large';
  variant?: 'contained' | 'outlined';
}

const buttonColor = {
  primary: {
    default: colors.blue650,
    hover: colors.blue750,
  },
  secondary: {
    default: colors.grey100,
    hover: colors.grey200,
  },
  danger: {
    default: colors.red450,
    hover: colors.red550,
  },
  neutral: {
    default: colors.grey600,
    hover: colors.grey700,
  },
  github: {
    default: colors.black,
    hover: colors.black
  }
};

const shapeStyle = css<Pick<ButtonProps, 'shape'>>`
  ${({ shape }) =>
    shape === 'rect' &&
    css`
      border-radius: 0.6rem;
    `}
  ${({ shape }) =>
    shape === 'round' &&
    css`
      border-radius: 1.5rem;
    `}
`;

const sizeStyle = css<Pick<ButtonProps, 'size'>>`
  ${({ size }) =>
    size === 'small' &&
    css`
      width: 8rem;
      height: 3rem;
    `}
  ${({ size }) =>
    size === 'medium' &&
    css`
      width: 11rem;
      height: 3rem;
    `}
  ${({ size }) =>
    size === 'large' &&
    css`
      width: 18rem;
      height: 5rem;
    `}
`;

const variantStyle = css<Pick<ButtonProps, 'variant' | 'color'>>`
  ${({ variant, color = 'primary' }) =>
    variant === 'contained' &&
    css`
      background-color: ${buttonColor[color].default};
      color: ${color !== 'secondary' && colors.white};

      &:hover {
        background-color: ${buttonColor[color].hover};
      }
    `}
  ${({ variant, color = 'primary' }) =>
    variant === 'outlined' &&
    css`
      border: 1px solid ${buttonColor[color].default};
      background-color: ${colors.white};
      color: ${color !== 'secondary' && buttonColor[color].default};

      &:hover {
        border-color: ${buttonColor[color].default};
        background-color: ${buttonColor[color].default};
        color: ${color !== 'secondary' && colors.white};
      }
    `}
`;

const StyledButton = styled.button<ButtonProps>`
  ${shapeStyle};
  ${sizeStyle};
  ${variantStyle};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  cursor: pointer;
`;

const Button = ({
  type = 'button',
  color = 'primary',
  shape = 'rect',
  size = 'medium',
  variant = 'contained',
  children,
  ...restProps
}: ButtonProps) => (
  <StyledButton
    type={type}
    color={color}
    shape={shape}
    size={size}
    variant={variant}
    {...restProps}
  >
    <Text
      sx={{
        fontWeight: 'bold',
        fontSize: size === 'large' ? 'large' : 'xSmall',
      }}
    >
      {children}
    </Text>
  </StyledButton>
);

export default Button;
