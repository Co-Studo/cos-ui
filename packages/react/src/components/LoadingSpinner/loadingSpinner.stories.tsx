import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoadingSpinner from '@components/LoadingSpinner';

export default {
  title: 'React/LoadingSpinner',
  component: LoadingSpinner,
} as ComponentMeta<typeof LoadingSpinner>;

const Template: ComponentStory<typeof LoadingSpinner> = (args) => (
  <LoadingSpinner {...args} />
);

export const Default = Template.bind({});
