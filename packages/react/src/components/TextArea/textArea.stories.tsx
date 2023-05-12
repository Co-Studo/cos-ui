import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Textarea } from '.';

export default {
  title: 'React/TextArea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const Default = Template.bind({});
