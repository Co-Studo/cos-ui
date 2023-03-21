import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '@components/Button';
import { FlexBox } from '@components/FlexBox';
import Paper from '@components/Paper';
import Text from '@components/Text';

import Spacing from './spacing';

export default {
  title: 'React/Spacing',
  component: Spacing,
  args: {
    size: '1rem',
  },
} as ComponentMeta<typeof Spacing>;

const Template: ComponentStory<typeof Spacing> = (args) => (
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

export const Default = () => (
  <Paper>
    <Button>1</Button>
    <Spacing />
    <Button>2</Button>
  </Paper>
);

export const Custom = Template.bind({});
