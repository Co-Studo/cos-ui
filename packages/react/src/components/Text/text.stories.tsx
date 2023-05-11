import { ComponentStory, ComponentMeta } from '@storybook/react';

import Text from '.';

import { typography } from '../../styles/typography';

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

export const Default = () => (
  <div>
    <Text variant="sectionTitle" sx={{ mb: 2 }}>
      Section Title
    </Text>
    <Text variant="sectionDescription">Section Description</Text>
    <Text variant="articleTitle">Article Title</Text>
    <Text variant="articleDescription">Article Description</Text>
    <Text
      variant="sectionDescription"
      sx={{
        fontSize: 'large',
        fontWeight: 'bold',
        color: 'primary',
      }}
    >
      Section Description
      <Text.Highlight sx={{ color: 'warning' }}> Highlight</Text.Highlight>
    </Text>
    <div css={{ width: '200px' }}>
      <Text as="p" ellipsis>
        A falsis, equiso barbatus abaculus.
      </Text>
      <Text as="p" ellipsis={2}>
        Ubi est fidelis galatae? Velox cacula rare perderes bursa est. Heuretess
        sunt bullas de neuter mensa. Brevis barcas foris desideriums musa est.
      </Text>
    </div>
  </div>
);

export const Custom: ComponentStory<typeof Text> = (args) => <Text {...args} />;
