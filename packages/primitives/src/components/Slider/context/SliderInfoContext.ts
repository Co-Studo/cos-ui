import { createContext, useContext } from 'react';

type SliderDefaultOptions = {
  slidesToShow: number;
  slidesToScroll: number;
  slidesMargin: string;
  speed: number;
  initialSlide: number;
};

export interface SliderOptions extends SliderDefaultOptions {
  responsive?: {
    breakpoint: number;
    options: Partial<SliderDefaultOptions>;
  }[];
}

type SliderInfoContextValue = {
  options: SliderOptions;
  SlideLength: number;
};

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
