import { useReducer } from 'react';

import { reducer, SlideIndexContext } from './SlideIndexContext';
import type { SliderProviderProps } from './Slider.types';
import { SliderInfoContext } from './SliderInfoContext';

const SliderProvider = (props: SliderProviderProps) => {
  const { options, SlideLength, children } = props;
  const sliderInfo = {
    options,
    SlideLength,
  };

  const SlideIndexReducer = useReducer(reducer, {
    currentIndex: options.initialSlide,
  });

  return (
    <SliderInfoContext.Provider value={sliderInfo}>
      <SlideIndexContext.Provider value={SlideIndexReducer}>
        {children}
      </SlideIndexContext.Provider>
    </SliderInfoContext.Provider>
  );
};

export default SliderProvider;
