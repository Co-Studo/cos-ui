import { IconName } from '../../assets/icons';
import { Palette } from '../../styles/styles.types';

export type IconSize = 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge';

export type StyledIconProps = {
  size?: IconSize;
  color?: keyof Palette;
};

export interface IconProps extends StyledIconProps {
  iconName: IconName;
}
