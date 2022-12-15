import { css } from 'styled-components';

import { useSliderInfoContext } from '@components/Slider/context/SliderInfoContext';

const SlideList = ({ children, ...restProps }) => {
  const {
    options: { slidesMargin },
  } = useSliderInfoContext();

  return (
    <div
      css={css`
        width: 100%;
        overflow: hidden;
      `}
    >
      <ul
        css={css`
          display: flex;
          gap: ${slidesMargin};
        `}
        {...restProps}
      >
        {children}
      </ul>
    </div>
  );
};

export default SlideList;
