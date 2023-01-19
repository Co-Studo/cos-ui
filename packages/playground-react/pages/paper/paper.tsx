import { Text, Paper, FlexBox } from '@cos-ui/react';

const PaperPage = () => (
  <FlexBox sx={{ flexDirection: 'column', gap: 10 }}>
    <Text variant="sectionTitle">Paper</Text>
    <Paper>
      <Text>Paper</Text>
    </Paper>
    <Text variant="sectionTitle">Clickable Paper</Text>
    <Paper
      onClick={() => {
        console.log('clicked');
      }}
      sx={{
        gap: 2,
      }}
    >
      <Text>Clickable Paper</Text>
      <Text>Clickable Paper</Text>
      <Text>Clickable Paper</Text>
    </Paper>
  </FlexBox>
);

export default PaperPage;
