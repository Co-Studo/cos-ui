import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextInput from '@components/TextInput';

export default {
  title: 'React/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Default = Template.bind({});
