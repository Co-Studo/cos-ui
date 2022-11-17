import { Button, FlexBox, Text } from '@cos-ui/react';

import colors from '@styles/colors';

const ButtonPage = () => (
  <div
    css={{
      backgroundColor: colors.white,
      padding: '2rem',
    }}
  >
    <Text variant='sectionTitle'>Basic Button</Text>
    <FlexBox sx={{ gap: '0.5rem', margin: '1rem 0 3rem' }}>
      <Button>Button</Button>
      <Button color="secondary">Button</Button>
      <Button color="danger">Button</Button>
      <Button color="neutral">Button</Button>
    </FlexBox>
    <Text variant='sectionTitle'>Outlined Button</Text>
    <FlexBox sx={{ gap: '0.5rem', margin: '1rem 0 3rem' }}>
      <Button variant='outlined'>Button</Button>
      <Button variant='outlined' color="secondary">Button</Button>
      <Button variant='outlined' color="danger">Button</Button>
      <Button variant='outlined' color="neutral">Button</Button>
    </FlexBox>
    <Text variant='sectionTitle'>Round Button</Text>
    <FlexBox sx={{ gap: '0.5rem', margin: '1rem 0 3rem' }}>
      <Button shape='round'>Button</Button>
      <Button shape='round' color="secondary">Button</Button>
      <Button shape='round' color="danger">Button</Button>
      <Button shape='round' color="neutral">Button</Button>
    </FlexBox>
    <Text variant='sectionTitle'>Button Size</Text>
    <FlexBox sx={{ gap: '0.5rem', margin: '1rem 0 3rem' }}>
      <Button size='small'>Button</Button>
      <Button size='medium'>Button</Button>
      <Button size='large'>Button</Button>
    </FlexBox>
  </div>
);

export default ButtonPage;
