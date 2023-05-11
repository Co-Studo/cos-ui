import { css } from 'styled-components';

import { useSlideIndexContext } from './context/SlideIndexContext';
import { useSliderInfoContext } from './context/SliderInfoContext';

const Slide = ({ children, ...restProps }) => {
  const [{ currentIndex }] = useSlideIndexContext();
  const {
    options: { slidesToShow, slidesMargin, speed, responsive },
  } = useSliderInfoContext();

  return (
    <li
      css={css`
        flex: 0 0 auto;
        width: calc(
          100% / ${slidesToShow} -
            (${slidesMargin} * (${slidesToShow} - 1) / ${slidesToShow})
        );
        transform: translate(
          calc((100% + ${slidesMargin}) * ${-currentIndex}),
          0
        );
        transition: transform calc(${speed}s / 1000) ease-in-out;
        ${responsive?.map(
          (responsiveOption) =>
            css`
              @media (max-width: ${responsiveOption.breakpoint}px) {
                width: calc(
                  100% / ${responsiveOption.options.slidesToShow} -
                    (
                      ${responsiveOption.options.slidesMargin} *
                        (${responsiveOption.options.slidesToShow} - 1) /
                        ${responsiveOption.options.slidesToShow}
                    )
                );
                transform: translate(
                  calc(
                    (100% + ${responsiveOption.options.slidesMargin}) *
                      ${-currentIndex}
                  ),
                  0
                );
                transition: transform
                  calc(${responsiveOption.options.speed}s / 1000) ease-in-out;
              }
            `,
        )}
      `}
      {...restProps}
    >
      {children}
    </li>
  );
};

export default Slide;
