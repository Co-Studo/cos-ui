import styled from 'styled-components';

import { icon, IconName } from '../../assets/icons';
import { Palette } from '../../styles/theme';

type StyledIconProps = {
  size?: keyof typeof iconSizes;
  color?: keyof Palette;
};

export interface IconProps extends StyledIconProps {
  iconName: IconName;
}

const iconSizes = {
  xSmall: '1.5rem',
  small: '2rem',
  medium: '2.5rem',
  large: '3rem',
  xLarge: '3.5rem',
};

const StyledIcon = styled(icon.bell)<StyledIconProps>`
  width: ${({ size = 'medium' }) => iconSizes[size]};
  height: auto;
  fill: ${({ theme, color = 'primary' }) => theme.palette[color]};
  stroke: ${({ theme, color = 'primary' }) => theme.palette[color]};
`;

const Icon = ({ iconName, ...restProps }: IconProps) => (
  <StyledIcon as={icon[iconName]} {...restProps} />
);

export default Icon;
