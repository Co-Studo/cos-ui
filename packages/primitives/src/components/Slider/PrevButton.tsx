import { useEffect, useState } from 'react';

import { useThrottle, useDebounce } from '../../utils/eventDelay';
import { useSlideIndexContext } from './SlideIndexContext';
import type { SliderButtonProps } from './Slider.types';
import { useSliderInfoContext } from './SliderInfoContext';

const PrevButton = (props: SliderButtonProps) => {
  const { children, ...restProps } = props;
  const [{ currentIndex }, dispatch] = useSlideIndexContext();
  const {
    options: { responsive = [], ...defaultOptions },
  } = useSliderInfoContext();
  const [sliderOptions, setSliderOptions] = useState(defaultOptions);
  const { slidesToScroll, speed } = sliderOptions;

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

  const limitIndex = 0;
  const disabled = currentIndex <= limitIndex;

  const handlePrevButtonClick = () => {
    if (disabled) return;

    const decreasedIndex =
      currentIndex - slidesToScroll > limitIndex
        ? slidesToScroll
        : currentIndex - limitIndex;

    dispatch({
      type: 'DECREASE_CURRENT_INDEX',
      slidesToScroll: decreasedIndex,
    });
  };

  return (
    <button
      type="button"
      onClick={useThrottle(handlePrevButtonClick, speed)}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default PrevButton;
