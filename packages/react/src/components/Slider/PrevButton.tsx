import { Slider } from '@cos-ui/primitives';
import styled from 'styled-components';

import { Icon } from '../Icon';
import { SliderButtonCSS } from './styles';

const StyledSliderPrevButton = styled(Slider.PrevButton)`
  left: calc((1.6rem * 2 + 2.5rem) * -1);
  ${SliderButtonCSS}
`;

const PrevButton = () => (
  <StyledSliderPrevButton>
    <Icon iconName="arrow" />
  </StyledSliderPrevButton>
);

export default PrevButton;
