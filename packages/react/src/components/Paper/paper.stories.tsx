import { StoryObj, Meta } from '@storybook/react';

import { Paper } from '.';

import { Text } from '../Text';

export default {
  title: 'React/Paper',
  component: Paper,
} as Meta<typeof Paper>;

export const Default: StoryObj<typeof Paper> = {
  render: (args) => (
    <Paper {...args}>
      <Text>Paper</Text>
    </Paper>
  ),
};

export const ClickablePaper: StoryObj<typeof Paper> = {
  render: (args) => (
    <Paper
      onClick={() => {
        console.log('clicked');
      }}
      sx={{
        gap: 2,
      }}
      {...args}
    >
      <Text>Clickable Paper</Text>
      <Text>Clickable Paper</Text>
      <Text>Clickable Paper</Text>
    </Paper>
  ),
};
