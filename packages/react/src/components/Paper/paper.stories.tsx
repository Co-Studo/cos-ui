import { ComponentStory, ComponentMeta } from '@storybook/react';

import Paper from '@components/Paper';
import Text from '@components/Text';

export default {
  title: 'React/Paper',
  component: Paper,
} as ComponentMeta<typeof Paper>;

export const Default: ComponentStory<typeof Paper> = (args) => (
  <Paper {...args}>
    <Text>Paper</Text>
  </Paper>
);

export const ClickablePaper: ComponentStory<typeof Paper> = (args) => (
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
);
