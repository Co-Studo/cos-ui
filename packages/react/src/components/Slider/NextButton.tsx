import { Slider } from '@cos-ui/primitives';
import styled from 'styled-components';

import { Icon } from '../Icon';
import { SliderButtonCSS } from './styles';

const StyledSliderNextButton = styled(Slider.NextButton)`
  right: calc((1.6rem * 2 + 2.5rem) * -1);
  ${SliderButtonCSS}
`;

const StyledNextArrowIcon = styled(Icon)`
  transform: scale(-1);
`;

const NextButton = () => (
  <StyledSliderNextButton>
    <StyledNextArrowIcon iconName="arrow" />
  </StyledSliderNextButton>
);

export default NextButton;
