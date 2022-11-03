import { css } from 'styled-components';

import { useSliderInfoContext } from '@components/Slider/context/SliderInfoContext';

const SlideList = ({ children, ...restProps }) => {
  const {
    options: { slidesMargin },
  } = useSliderInfoContext();

  return (
    <ul
      css={css`
        display: flex;
        gap: ${slidesMargin};
      `}
      {...restProps}
    >
      {children}
    </ul>
  );
};

export default SlideList;
