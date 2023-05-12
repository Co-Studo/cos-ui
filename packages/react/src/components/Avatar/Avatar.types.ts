import { SizeSX, SpacingSX, Palette } from '../../styles/styles.types';

export type AvatarSize = 'small' | 'medium' | 'large';

export interface AvatarSX extends SpacingSX, SizeSX {
  border?: string;
  borderRadius?: string;
  backgroundColor?: keyof Palette;
  color?: keyof Palette;
}

export type AvatarProps = {
  sx?: AvatarSX;
  alt?: string;
  src?: string;
  size?: AvatarSize;
  children?: string;
  className?: string;
};
