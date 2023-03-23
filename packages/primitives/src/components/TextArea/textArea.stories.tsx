import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextArea from '@components/TextArea';

export default {
  title: 'Primitives/TextArea',
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const Default = Template.bind({});
