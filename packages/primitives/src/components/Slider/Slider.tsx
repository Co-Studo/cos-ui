import { Children, ReactElement, useEffect } from 'react';
import { css } from 'styled-components';

import { isNaturalNumber, validate } from '../../utils/validation';
import type { SliderProps } from './Slider.types';
import SliderProvider from './SliderProvider';

const defaultOptions = {
  slidesToShow: 1,
  slidesToScroll: 1,
  slidesMargin: '0px',
  speed: 1000,
  initialSlide: 0,
};

const Slider = (props: SliderProps) => {
  const { options, children } = props;
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

  const sortResponsiveOptions = () => {
    sliderOptions.responsive = sliderOptions.responsive?.sort(
      (a, b) => b.breakpoint - a.breakpoint,
    );
  };

  useEffect(() => {
    validateOptions();
    sortResponsiveOptions();
  }, [sliderOptions]);

  const getSlideLength = () => {
    const childrenList = Children.toArray(children) as ReactElement[];
    const slideList = childrenList.find((child) =>
      Array.isArray(child.props.children),
    );
    const slideLength = slideList?.props.children?.length || 0;

    return slideLength;
  };

  return (
    <SliderProvider options={sliderOptions} SlideLength={getSlideLength()}>
      <div
        css={css`
          position: relative;
        `}
      >
        {children}
      </div>
    </SliderProvider>
  );
};

export default Slider;
