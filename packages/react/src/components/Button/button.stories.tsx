import { ComponentStory, ComponentMeta } from '@storybook/react';
import { css } from 'styled-components';

import Button from '.';

import { FlexBox } from '../FlexBox';
import { Text } from '../Text';

export default {
  title: 'React/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Default = () => (
  <div
    css={css`
      background-color: ${({ theme }) => theme.palette.white};
      padding: 2rem;
    `}
  >
    <Text variant="sectionTitle">Basic Button</Text>
    <FlexBox sx={{ gap: 5, mt: 5, mb: 10 }}>
      <Button>Button</Button>
      <Button disabled>Button</Button>
      <Button color="danger">Button</Button>
      <Button color="neutral">Button</Button>
      <Button color="black">Button</Button>
    </FlexBox>
    <Text variant="sectionTitle">Outlined Button</Text>
    <FlexBox sx={{ gap: 5, mt: 5, mb: 10 }}>
      <Button variant="outlined">Button</Button>
      <Button variant="outlined" disabled>
        Button
      </Button>
      <Button variant="outlined" color="danger">
        Button
      </Button>
      <Button variant="outlined" color="neutral">
        Button
      </Button>
      <Button variant="outlined" color="black">
        Button
      </Button>
    </FlexBox>
    <Text variant="sectionTitle">Round Button</Text>
    <FlexBox sx={{ gap: 5, mt: 5, mb: 10 }}>
      <Button shape="round">Button</Button>
      <Button shape="round" color="danger">
        Button
      </Button>
      <Button shape="round" color="neutral">
        Button
      </Button>
      <Button shape="round" color="black">
        Button
      </Button>
    </FlexBox>
    <Text variant="sectionTitle">Button Size</Text>
    <FlexBox sx={{ gap: 5, mt: 5, mb: 10 }}>
      <Button size="small">Button</Button>
      <Button size="medium">Button</Button>
      <Button size="large">Button</Button>
    </FlexBox>
  </div>
);

export const Custom = Template.bind({});
