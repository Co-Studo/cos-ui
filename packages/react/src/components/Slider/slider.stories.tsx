import { ComponentMeta } from '@storybook/react';

import Button from '@components/Button';
import { FlexBox } from '@components/FlexBox';
import StyledSlider from '@components/Slider';
import Text from '@components/Text';
import { myStudies } from '@constants/slider';

export default {
  title: 'React/Slider',
  component: StyledSlider,
} as ComponentMeta<typeof StyledSlider>;

export const Default = () => (
  <div
    css={{
      maxWidth: '127rem',
      width: '100%',
      margin: '0 auto',
      padding: '0 4.5rem',
    }}
  >
    <StyledSlider
      options={{
        slidesToShow: 4,
        slidesToScroll: 2,
        slidesMargin: '2rem',
        speed: 500,
        responsive: [
          {
            breakpoint: 820,
            options: { slidesToShow: 3, slidesMargin: '1.5rem' },
          },
          {
            breakpoint: 420,
            options: {
              slidesToShow: 2,
              slidesToScroll: 1,
              slidesMargin: '1rem',
            },
          },
        ],
      }}
    >
      <StyledSlider.List>
        {myStudies.map(({ id, title, description }) => (
          <StyledSlider.Item key={id}>
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
          </StyledSlider.Item>
        ))}
      </StyledSlider.List>
      <StyledSlider.PrevButton />
      <StyledSlider.NextButton />
    </StyledSlider>
  </div>
);
