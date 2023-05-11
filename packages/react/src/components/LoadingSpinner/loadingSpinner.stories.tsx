import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoadingSpinner from '.';

import Text from '../Text';

export default {
  title: 'React/LoadingSpinner',
  component: LoadingSpinner,
} as ComponentMeta<typeof LoadingSpinner>;

const Template: ComponentStory<typeof LoadingSpinner> = (args) => (
  <LoadingSpinner {...args} />
);

export const Default = () => (
  <>
    <div css={{ position: 'relative', width: '20rem', height: '15rem' }}>
      <Text variant="sectionTitle">Small</Text>
      <LoadingSpinner size="small" />
    </div>
    <div css={{ position: 'relative', width: '20rem', height: '15rem' }}>
      <Text variant="sectionTitle">Medium</Text>
      <LoadingSpinner />
    </div>
    <div css={{ position: 'relative', width: '20rem', height: '15rem' }}>
      <Text variant="sectionTitle">Large</Text>
      <LoadingSpinner size="large" />
    </div>
  </>
);

export const Custom = Template.bind({});
