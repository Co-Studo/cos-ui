import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useRef } from 'react';

import { FlexBox } from '.';

export default {
  title: 'React/FlexBox',
  component: FlexBox,
} as ComponentMeta<typeof FlexBox>;

export const Default: ComponentStory<typeof FlexBox> = (args) => {
  const ref = useRef<HTMLUListElement>(null);

  return (
    <FlexBox
      as="ul"
      ref={ref}
      sx={{
        bgColor: 'primary',
        width: '10rem',
        height: '5rem',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      {...args}
    >
      <FlexBox>1</FlexBox>
      <FlexBox sx={{ alignSelf: 'flex-start' }}>2</FlexBox>
      <FlexBox>3</FlexBox>
    </FlexBox>
  );
};
