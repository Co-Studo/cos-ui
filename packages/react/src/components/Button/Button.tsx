import styled, { css } from 'styled-components';

import { Text } from '../Text';
import type { ButtonProps } from './Button.types';

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
  ${({ theme, variant, color = 'primary' }) => {
    const buttonColor = {
      primary: {
        default: theme.palette.primary,
        hover: theme.palette.primary_dark,
        disabled: theme.palette.primary_light,
      },
      danger: {
        default: theme.palette.danger,
        hover: theme.palette.danger_dark,
        disabled: theme.palette.danger_light,
      },
      neutral: {
        default:
          variant === 'contained'
            ? theme.palette.neutral_1_light
            : theme.palette.neutral_2,
        hover:
          variant === 'contained'
            ? theme.palette.neutral_1
            : theme.palette.neutral_2_dark,
        disabled:
          variant === 'contained'
            ? theme.palette.neutral_1_light
            : theme.palette.neutral_2_light,
      },
      black: {
        default: theme.palette.black,
        hover: theme.palette.neutral_2_dark,
        disabled: theme.palette.neutral_2_light,
      },
    };

    switch (variant) {
      case 'contained':
        return css`
          background-color: ${buttonColor[color].default};
          color: ${color !== 'neutral' && theme.palette.white};
          &:hover {
            background-color: ${buttonColor[color].hover};
          }
          &:disabled {
            background-color: ${buttonColor[color].disabled};
            color: ${color === 'neutral' && theme.palette.neutral_2_light};
          }
        `;
      case 'outlined':
        return css`
          border: 1px solid ${buttonColor[color].default};
          background-color: ${theme.palette.white};
          color: ${buttonColor[color].default};
          &:hover {
            border-color: ${buttonColor[color].hover};
            color: ${buttonColor[color].hover};
          }
          &:disabled {
            border-color: ${buttonColor[color].disabled};
            color: ${buttonColor[color].disabled};
          }
        `;
      default:
        return '';
    }
  }}
`;

// TODO : css prop 으로 변경
const StyledButton = styled.button<ButtonProps>`
  ${shapeStyle};
  ${sizeStyle};
  ${variantStyle};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`;

const Button = (props: ButtonProps) => {
  const {
    type = 'button',
    color = 'primary',
    shape = 'rect',
    size = 'medium',
    variant = 'contained',
    children,
    ...restProps
  } = props;

  return (
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
};

export default Button;
