import styled from 'styled-components';

import { icon } from '../../assets/icons';
import type { IconProps, StyledIconProps } from './Icon.types';

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

const Icon = (props: IconProps) => {
  const { iconName, ...restProps } = props;
  return <StyledIcon as={icon[iconName]} {...restProps} />;
};

export default Icon;
