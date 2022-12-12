import { ElementType, ReactNode } from 'react';
import styled from 'styled-components';

type FlexBoxItemSX = {
  alignSelf?: 'flex-start' | 'flex-end' | 'center';
  justifySelf?: 'flex-start' | 'flex-end' | 'center';
  flexShrink?: number;
  flexGrow?: number;
};

type FlexBoxItemProps = {
  children: ReactNode;
  sx?: FlexBoxItemSX;
  as: ElementType;
};

const Wrapper = styled.div`
  display: flex;
`;

const FlexBoxItem = ({ children, sx, as }: FlexBoxItemProps) => (
  <Wrapper as={as} css={sx}>
    {children}
  </Wrapper>
);

export default FlexBoxItem;
