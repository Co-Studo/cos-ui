import { ReactElement, useReducer } from 'react';

import { reducer, SlideIndexContext } from './SlideIndexContext';
import { SliderOptions, SliderInfoContext } from './SliderInfoContext';

type SliderProviderProps = {
  options: SliderOptions;
  SlideLength: number;
  children: ReactElement | ReactElement[];
};

const SliderProvider = ({
  options,
  SlideLength,
  children,
}: SliderProviderProps) => {
  const SliderInfo = {
    options,
    SlideLength,
  };

  const SlideIndexReducer = useReducer(reducer, {
    currentIndex: options.initialSlide,
  });

  return (
    <SliderInfoContext.Provider value={SliderInfo}>
      <SlideIndexContext.Provider value={SlideIndexReducer}>
        {children}
      </SlideIndexContext.Provider>
    </SliderInfoContext.Provider>
  );
};

export default SliderProvider;
