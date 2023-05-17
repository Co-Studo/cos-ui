import { createContext, useContext } from 'react';

import type { SliderInfoContextValue } from './Slider.types';

export const SliderInfoContext = createContext<SliderInfoContextValue | null>(
  null,
);
SliderInfoContext.displayName = 'SliderInfoContext';

export const useSliderInfoContext = () => {
  const context = useContext(SliderInfoContext);

  if (!context)
    throw new Error(
      'useSliderInfoContext should be used within SliderInfoContext.Provider',
    );

  return context;
};
