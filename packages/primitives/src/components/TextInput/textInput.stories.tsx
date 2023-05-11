import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextInput from '.';

export default {
  title: 'Primitives/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Default = Template.bind({});
