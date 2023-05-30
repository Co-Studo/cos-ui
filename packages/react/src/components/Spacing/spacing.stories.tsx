import { StoryFn, Meta } from '@storybook/react';

import { Spacing } from '.';

import { Button } from '../Button';
import { FlexBox } from '../FlexBox';
import { Paper } from '../Paper';
import { Text } from '../Text';

export default {
  title: 'React/Spacing',
  component: Spacing,
  args: {
    size: '1rem',
  },
} as Meta<typeof Spacing>;

export const Default = () => (
  <Paper>
    <Button>1</Button>
    <Spacing />
    <Button>2</Button>
  </Paper>
);

const Template: StoryFn<typeof Spacing> = (args) => (
  <FlexBox>
    <Paper>
      <Button>1</Button>
      <Spacing {...args} />
      <Button>2</Button>
    </Paper>
    <Spacing {...args} />
    <Paper>
      <Text>Hello</Text>
    </Paper>
  </FlexBox>
);

export const Custom = {
  render: Template,
};
