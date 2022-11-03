import { useSlideIndexContext } from '@components/Slider/context/SlideIndexContext';
import { useSliderInfoContext } from '@components/Slider/context/SliderInfoContext';
import throttle from '@utils/eventDelay';

const NextButton = ({ children, ...restProps }) => {
  const [{ currentIndex }, dispatch] = useSlideIndexContext();
  const {
    options: { slidesToShow, slidesToScroll, speed },
    SlideLength,
  } = useSliderInfoContext();
  const limitIndex = SlideLength - slidesToShow;
  const disabled = currentIndex >= limitIndex;

  const handleNextButtonClick = () => {
    if (disabled) return;

    const increasedIndex =
      currentIndex + slidesToScroll < limitIndex
        ? slidesToScroll
        : limitIndex - currentIndex;

    dispatch({
      type: 'INCREASE_CURRENT_INDEX',
      slidesToScroll: increasedIndex,
    });
  };

  return (
    <button
      type="button"
      onClick={throttle(handleNextButtonClick, speed)}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default NextButton;
