import { Button, Slider, Text, FlexBox } from '@cos-ui/react';

import { myStudies } from '@constants/mock';

const SliderPage = () => (
  <div
    css={{
      maxWidth: '127rem',
      width: '100%',
      margin: '0 auto',
      padding: '0 4.5rem',
    }}
  >
    <Slider
      options={{
        slidesToShow: 4,
        slidesToScroll: 2,
        slidesMargin: '2rem',
        speed: 500,
        responsive: [
          {
            breakpoint: 820,
            options: { slidesMargin: '1.5rem', slidesToShow: 3 },
          },
          {
            breakpoint: 420,
            options: { slidesMargin: '1rem', slidesToShow: 2 },
          },
        ],
      }}
    >
      <Slider.List>
        {myStudies.map(({ id, title, description }) => (
          <Slider.Item key={id}>
            <Text variant="articleTitle">{title}</Text>
            <Text variant="articleDescription" sx={{ mt: 1 }} ellipsis>
              {description}
            </Text>
            <FlexBox
              sx={{ justifyContent: 'space-between', mt: '3rem', gap: '1rem' }}
            >
              <Button>체크인</Button>
              <Button variant="outlined">체크아웃</Button>
            </FlexBox>
          </Slider.Item>
        ))}
      </Slider.List>
      <Slider.PrevButton />
      <Slider.NextButton />
    </Slider>
  </div>
);

export default SliderPage;
