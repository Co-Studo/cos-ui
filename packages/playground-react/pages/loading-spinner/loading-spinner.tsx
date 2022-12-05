import { LoadingSpinner, Text } from '@cos-ui/react';

const LoadingSpinnerPage = () => (
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

export default LoadingSpinnerPage;
