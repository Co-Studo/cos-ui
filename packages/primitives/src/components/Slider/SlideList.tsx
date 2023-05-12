import { css } from 'styled-components';

import type { SlideListProps } from './Slider.types';
import { useSliderInfoContext } from './SliderInfoContext';

const SlideList = (props: SlideListProps) => {
  const { children, ...restProps } = props;
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
