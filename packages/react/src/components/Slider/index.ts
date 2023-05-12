import { Slider as SliderRoot } from '@cos-ui/primitives';

import NextButton from './NextButton';
import PrevButton from './PrevButton';
import SliderItem from './SliderItem';

const Slider = Object.assign(SliderRoot, {
  List: SliderRoot.List,
  Item: SliderItem,
  PrevButton,
  NextButton,
});

export { Slider };
