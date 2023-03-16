import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '@components/Button';

export default {
  title: 'React/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Default = Template.bind({});
