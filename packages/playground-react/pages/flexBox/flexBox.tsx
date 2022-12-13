import { FlexBox } from '@cos-ui/react';
import { useRef } from 'react';

const FlexBoxPage = () => {
  const ref = useRef<HTMLUListElement>(null);

  return (
    <FlexBox
      as="ul"
      ref={ref}
      sx={{
        bgColor: 'primary',
        width: '10rem',
        height: '5rem',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <FlexBox>1</FlexBox>
      <FlexBox sx={{ alignSelf: 'flex-start' }}>2</FlexBox>
      <FlexBox>3</FlexBox>
    </FlexBox>
  );
};

export default FlexBoxPage;
