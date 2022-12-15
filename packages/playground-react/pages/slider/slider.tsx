import { Button, Slider, Text, FlexBox } from '@cos-ui/react';

import { myStudies } from '@constants/mock';

const SliderPage = () => (
  <div css={{ maxWidth: '127rem', margin: '0 auto', padding: '0 4.5rem' }}>
    <Slider options={{ slidesToShow: 4, slidesMargin: '2rem', speed: 500 }}>
      <Slider.List>
        {myStudies.map(({ id, title, description }) => (
          <Slider.Item key={id}>
            <Text variant="articleTitle">{title}</Text>
            <Text variant="articleDescription" sx={{ mt: 1 }} ellipsis>
              {description}
            </Text>
            <FlexBox sx={{ justifyContent: 'space-between', mt: '3rem' }}>
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
