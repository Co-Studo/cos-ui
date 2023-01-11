import { css } from 'styled-components';

import { useSliderInfoContext } from '@components/Slider/context/SliderInfoContext';

const SlideList = ({ children, ...restProps }) => {
  const {
    options: { slidesMargin, responsive },
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
          ${responsive?.map(
            (responsiveOption) => css`
              @media (max-width: ${responsiveOption.breakpoint}px) {
                gap: ${responsiveOption.options.slidesMargin};
              }
            `,
          )}
        `}
        {...restProps}
      >
        {children}
      </ul>
    </div>
  );
};

export default SlideList;
