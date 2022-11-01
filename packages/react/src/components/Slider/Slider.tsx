import { ReactElement, useEffect } from 'react';
import { css } from 'styled-components';

import { SliderOptions } from '@components/Slider/context/SliderInfoContext';
import SliderProvider from '@components/Slider/context/SliderProvider';
import { isNaturalNumber, validate } from '@utils/validation';

type SliderProps = {
  options?: Partial<SliderOptions>;
  children: ReactElement | ReactElement[];
};

const defaultOptions = {
  slidesToShow: 1,
  slidesToScroll: 1,
  slidesMargin: '0px',
  speed: 1000,
  initialSlide: 0,
};

const Slider = ({ options = defaultOptions, children }: SliderProps) => {
  const sliderOptions = { ...defaultOptions, ...options };

  const validateOptions = () => {
    const naturalNumberOptions = [
      sliderOptions.slidesToShow,
      sliderOptions.slidesToScroll,
      sliderOptions.speed,
      // index가 0부터 시작하므로
      sliderOptions.initialSlide + 1,
    ];

    naturalNumberOptions.forEach((option) => {
      const error = validate<number>(option, isNaturalNumber);
      if (!error.ok) throw new Error(error.message);
    });
  };

  useEffect(() => validateOptions(), [sliderOptions]);

  const getSlideLength = () => {
    const Children = Array.isArray(children) ? children : [children];
    const slideList = Children.find((child) => {
      if (typeof child.type === 'string') return false;
      return child?.type.name === 'SlideList';
    });
    const SlideLength = slideList ? slideList.props.children.length : 0;

    return SlideLength;
  };

  return (
    <SliderProvider options={sliderOptions} SlideLength={getSlideLength()}>
      <div
        css={css`
          position: relative;
          width: 100%;
          overflow: hidden;
        `}
      >
        {children}
      </div>
    </SliderProvider>
  );
};

export default Slider;
