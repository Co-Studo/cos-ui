import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon from '.';

import { lightTheme } from '../../styles/theme';
import { FlexBox } from '../FlexBox';
import Text from '../Text';

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

export const Default = () => (
  <div>
    <Text variant="sectionTitle">Icon Name</Text>
    <FlexBox sx={{ gap: '1rem', mt: 1, mb: 2 }}>
      <Icon iconName="arrow" />
      <Icon iconName="bell" />
      <Icon iconName="crown" />
      <Icon iconName="flag" />
      <Icon iconName="lock" />
      <Icon iconName="sort" />
      <Icon iconName="star" />
    </FlexBox>
    <Text variant="sectionTitle">Icon Size</Text>
    <FlexBox sx={{ gap: '1rem', mt: 1, mb: 2 }}>
      <Icon iconName="star" size="xSmall" />
      <Icon iconName="star" size="small" color="neutral_1" />
      <Icon iconName="star" size="medium" color="neutral_1" />
      <Icon iconName="star" size="large" color="neutral_2" />
      <Icon iconName="star" size="xLarge" color="neutral_2" />
    </FlexBox>
  </div>
);

export const Custom = Template.bind({});
