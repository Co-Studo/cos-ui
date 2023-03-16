import { ComponentStory, ComponentMeta } from '@storybook/react';

import Text from '@components/Text';
import { typography } from '@styles/typography';

export default {
  title: 'React/Text',
  component: Text,
  argTypes: {
    children: { control: 'text', defaultValue: 'Cos-ui' },
    variant: {
      control: 'select',
      defaultValue: 'sectionTitle',
      options: [...Object.keys(typography)],
    },
    ellipsis: {
      control: 'text',
    },
    sx: {
      control: 'object',
      defaultValue: {
        fontSize: 'large',
        fontWeight: 'bold',
        color: 'primary',
      },
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
