import NextButton from '@components/Slider/NextButton';
import PrevButton from '@components/Slider/PrevButton';
import Slide from '@components/Slider/Slide';
import SlideList from '@components/Slider/SlideList';
import SliderRoot from '@components/Slider/Slider';

const Slider = Object.assign(SliderRoot, {
  List: SlideList,
  Item: Slide,
  PrevButton,
  NextButton,
});

export default Slider;
