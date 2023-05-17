import NextButton from './NextButton';
import PrevButton from './PrevButton';
import Slide from './Slide';
import SlideList from './SlideList';
import SliderRoot from './Slider';

const Slider = Object.assign(SliderRoot, {
  List: SlideList,
  Item: Slide,
  PrevButton,
  NextButton,
});

export { Slider };
export * from './Slider.types';
