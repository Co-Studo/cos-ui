import { FlexBox, Item } from '@cos-ui/react';
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
      <Item>1</Item>
      <Item sx={{ alignSelf: 'flex-start' }}>2</Item>
      <Item>3</Item>
    </FlexBox>
  );
};

export default FlexBoxPage;
