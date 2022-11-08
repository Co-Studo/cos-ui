import { ElementType, ReactNode } from 'react';
import styled from 'styled-components';

type FlexBoxSX = {
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  flexDirection?: 'row' | 'column';
  gap?: string;
};

type FlexBoxProps = {
  as?: ElementType;
  children: ReactNode;
  sx?: FlexBoxSX;
};

const Wrapper = styled.div`
  display: flex;
`;

const FlexBox = (props: FlexBoxProps) => {
  const { sx, as = 'div', children } = props;

  return (
    <Wrapper as={as} css={sx}>
      {children}
    </Wrapper>
  );
};

export default FlexBox;
