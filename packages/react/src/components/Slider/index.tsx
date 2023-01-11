import { Slider } from '@cos-ui/primitives';
import styled, { css } from 'styled-components';

import Icon from '@components/Icon';

const StyledSliderItem = styled(Slider.Item)`
  padding: 2.6rem 2.2rem 2rem;
  border-radius: 2rem;
  background: ${({ theme }) => theme.palette.white};
  box-shadow: 0.3rem 0.3rem 0.6rem ${({ theme }) => theme.palette.shadow_100};
`;

const SliderButtonCSS = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 1.6rem;
  & > svg {
    display: block;
  }
  &:disabled > svg path {
    stroke: ${({ theme }) => theme.palette.neutral_1_dark};
  }
  &:disabled {
    color: ${({ theme }) => theme.palette.neutral_1_dark};
  }
`;

const StyledSliderPrevButton = styled(Slider.PrevButton)`
  left: calc((1.6rem * 2 + 2.5rem) * -1);
  ${SliderButtonCSS}
`;

const PrevButton = () => (
  <StyledSliderPrevButton>
    <Icon iconName="arrow" />
  </StyledSliderPrevButton>
);

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

const StyledSlider = Object.assign(Slider, {
  List: Slider.List,
  Item: StyledSliderItem,
  PrevButton,
  NextButton,
});

export default StyledSlider;
