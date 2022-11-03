import { createContext, Dispatch, useContext } from 'react';

type SlideIndexState = {
  currentIndex: number;
};

type SlideIndexAction = {
  type: 'INCREASE_CURRENT_INDEX' | 'DECREASE_CURRENT_INDEX';
  slidesToScroll: number;
};

type SlideIndexContextValues = [SlideIndexState, Dispatch<SlideIndexAction>];

export const reducer = (
  { currentIndex }: SlideIndexState,
  action: SlideIndexAction,
) => {
  const { type, slidesToScroll } = action;

  switch (type) {
    case 'INCREASE_CURRENT_INDEX':
      return { currentIndex: currentIndex + slidesToScroll };
    case 'DECREASE_CURRENT_INDEX':
      return { currentIndex: currentIndex - slidesToScroll };
    default:
      throw new Error(`There is no type '${type}'. Please check the type.`);
  }
};

export const SlideIndexContext =
  createContext<SlideIndexContextValues | null>(null);
SlideIndexContext.displayName = 'SlideIndexContext';

export const useSlideIndexContext = () => {
  const context = useContext(SlideIndexContext);

  if (!context)
    throw new Error(
      'useSlideIndexContext should be used within SlideIndexContext.Provider',
    );

  return context;
};
