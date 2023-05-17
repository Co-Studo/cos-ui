import { ComponentPropsWithoutRef, Dispatch, ReactElement } from 'react';

/**
 * Slider
 */
export type SliderProps = {
  options?: Partial<SliderOptions>;
  children: ReactElement | ReactElement[];
};

/**
 * Slide
 */
export type SlideProps = ComponentPropsWithoutRef<'li'>;

/**
 * SlideListProps
 */
export type SlideListProps = ComponentPropsWithoutRef<'ul'>;

/**
 * SliderButtonProps
 */
export type SliderButtonProps = ComponentPropsWithoutRef<'button'>;

/**
 * SliderProvider
 */
export type SliderProviderProps = {
  options: SliderOptions;
  SlideLength: number;
  children: ReactElement | ReactElement[];
};

/**
 * SliderInfoContext
 */
export type SliderDefaultOptions = {
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

export type SliderInfoContextValue = {
  options: SliderOptions;
  SlideLength: number;
};

/**
 * SlideIndexContext
 */

export type SlideIndexState = {
  currentIndex: number;
};

export type SlideIndexAction = {
  type: 'INCREASE_CURRENT_INDEX' | 'DECREASE_CURRENT_INDEX';
  slidesToScroll: number;
};

export type SlideIndexContextValues = [
  SlideIndexState,
  Dispatch<SlideIndexAction>,
];
