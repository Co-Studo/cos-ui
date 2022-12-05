import { Button, FlexBox, Text } from '@cos-ui/react';
import { css } from 'styled-components';

const ButtonPage = () => (
  <div
    css={css`
      background-color: ${({ theme }) => theme.palette.white};
      padding: 2rem;
    `}
  >
    <Text variant="sectionTitle">Basic Button</Text>
    <FlexBox sx={{ gap: '1rem', mt: 1, mb: 2 }}>
      <Button>Button</Button>
      <Button disabled>Button</Button>
      <Button color="danger">Button</Button>
      <Button color="neutral_1">Button</Button>
      <Button color="black">Button</Button>
    </FlexBox>
    <Text variant="sectionTitle">Outlined Button</Text>
    <FlexBox sx={{ gap: '1rem', mt: 1, mb: 2 }}>
      <Button variant="outlined">Button</Button>
      <Button variant="outlined" disabled>
        Button
      </Button>
      <Button variant="outlined" color="danger">
        Button
      </Button>
      <Button variant="outlined" color="neutral_1">
        Button
      </Button>
      <Button variant="outlined" color="black">
        Button
      </Button>
    </FlexBox>
    <Text variant="sectionTitle">Round Button</Text>
    <FlexBox sx={{ gap: '1rem', mt: 1, mb: 2 }}>
      <Button shape="round">Button</Button>
      <Button shape="round" color="danger">
        Button
      </Button>
      <Button shape="round" color="neutral_1">
        Button
      </Button>
      <Button shape="round" color="black">
        Button
      </Button>
    </FlexBox>
    <Text variant="sectionTitle">Button Size</Text>
    <FlexBox sx={{ gap: '1rem', mt: 1, mb: 2 }}>
      <Button size="small">Button</Button>
      <Button size="medium">Button</Button>
      <Button size="large">Button</Button>
    </FlexBox>
  </div>
);

export default ButtonPage;
