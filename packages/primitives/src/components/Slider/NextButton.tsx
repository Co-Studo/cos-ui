import { useEffect, useState } from 'react';

import { useSlideIndexContext } from '@components/Slider/context/SlideIndexContext';
import { useSliderInfoContext } from '@components/Slider/context/SliderInfoContext';
import throttle from '@utils/eventDelay';

const NextButton = ({ children, ...restProps }) => {
  const [{ currentIndex }, dispatch] = useSlideIndexContext();
  const {
    options: { responsive, ...defaultOptions },
    SlideLength,
  } = useSliderInfoContext();
  const [sliderOptions, setSliderOptions] = useState(defaultOptions);
  const { slidesToShow, slidesToScroll, speed } = sliderOptions;

  useEffect(() => {
    const responsiveOptions = responsive
      ?.sort((a, b) => b.breakpoint - a.breakpoint)
      .find(({ breakpoint }) => window.innerWidth <= breakpoint);
    setSliderOptions({ ...defaultOptions, ...responsiveOptions });
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
      onClick={throttle(handleNextButtonClick, speed)}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default NextButton;
