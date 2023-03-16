import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon from '@components/Icon';
import { lightTheme } from '@styles/theme';

export default {
  title: 'React/Icon',
  component: Icon,
  argTypes: {
    iconName: {
      control: 'select',
      defaultValue: 'bell',
    },
    size: {
      control: 'radio',
      defaultValue: 'large',
    },
    color: {
      control: 'select',
      defaultValue: 'primary',
      options: [...Object.keys(lightTheme.palette)],
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
