import type { AvatarProps } from '../Avatar/Avatar.types';

export type AvatarGroupProps = {
  avatars: AvatarProps[];
  max?: number;
  spacing?: 'small' | 'medium' | 'large';
  size?: 'small' | 'medium' | 'large';
};
