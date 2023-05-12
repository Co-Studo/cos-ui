import { ComponentPropsWithoutRef } from 'react';

export type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  type?: 'button' | 'submit';
  color?: 'primary' | 'danger' | 'neutral' | 'black';
  shape?: 'round' | 'rect';
  size?: 'small' | 'medium' | 'large';
  variant?: 'contained' | 'outlined';
};
