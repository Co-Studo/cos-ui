import { css } from 'styled-components';

import { useSlideIndexContext } from '@components/Slider/context/SlideIndexContext';
import { useSliderInfoContext } from '@components/Slider/context/SliderInfoContext';

const Slide = ({ children, ...restProps }) => {
  const [{ currentIndex }] = useSlideIndexContext();
  const {
    options: { slidesToShow, slidesMargin, speed, responsive },
  } = useSliderInfoContext();

  const responsiveOptions = responsive?.map(({ breakpoint, options }) => ({
    breakpoint,
    slidesToShow,
    slidesMargin,
    speed,
    ...options,
  }));

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
        ${responsiveOptions?.map(
          (responsiveOption) => css`
            @media (max-width: ${responsiveOption.breakpoint}px) {
              width: calc(
                100% / ${responsiveOption.slidesToShow} -
                  (
                    ${responsiveOption.slidesMargin} *
                      (${responsiveOption.slidesToShow} - 1) /
                      ${responsiveOption.slidesToShow}
                  )
              );
              transform: translate(
                calc(
                  (100% + ${responsiveOption.slidesMargin}) * ${-currentIndex}
                ),
                0
              );
              transition: transform calc(${responsiveOption.speed}s / 1000)
                ease-in-out;
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
