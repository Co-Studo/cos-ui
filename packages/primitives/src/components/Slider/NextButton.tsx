import { useEffect, useState } from 'react';

import { useThrottle, useDebounce } from '../../utils/eventDelay';
import { useSlideIndexContext } from './SlideIndexContext';
import type { SliderButtonProps } from './Slider.types';
import { useSliderInfoContext } from './SliderInfoContext';

const NextButton = (props: SliderButtonProps) => {
  const { children, ...restProps } = props;
  const [{ currentIndex }, dispatch] = useSlideIndexContext();
  const {
    options: { responsive = [], ...defaultOptions },
    SlideLength,
  } = useSliderInfoContext();
  const [sliderOptions, setSliderOptions] = useState(defaultOptions);
  const { slidesToShow, slidesToScroll, speed } = sliderOptions;

  const setWindowSizeSliderOptions = () => {
    const responsiveOptions = [...responsive]
      .reverse()
      .find(({ breakpoint }) => window.innerWidth <= breakpoint);

    setSliderOptions({ ...defaultOptions, ...responsiveOptions?.options });
  };

  const debounceWindowSizeSliderOptions = useDebounce(
    setWindowSizeSliderOptions,
    300,
  );

  useEffect(() => {
    setWindowSizeSliderOptions();
    window.addEventListener('resize', () => debounceWindowSizeSliderOptions());

    return () => {
      window.removeEventListener('resize', () =>
        debounceWindowSizeSliderOptions(),
      );
    };
  }, [responsive]);

  const limitIndex = SlideLength - slidesToShow;
  const disabled = currentIndex >= limitIndex;

  const handleNextButtonClick = () => {
    if (disabled) return;

    const increasedIndex =
      currentIndex + slidesToScroll < limitIndex
        ? slidesToScroll
        : limitIndex - currentIndex;

    dispatch({
      type: 'INCREASE_CURRENT_INDEX',
      slidesToScroll: increasedIndex,
    });
  };

  return (
    <button
      type="button"
      onClick={useThrottle(handleNextButtonClick, speed)}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default NextButton;
