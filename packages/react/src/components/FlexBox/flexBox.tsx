import { ComponentPropsWithRef, ElementType, forwardRef } from 'react';
import styled, { useTheme } from 'styled-components';

import { FlexBoxComponent, FlexBoxProps } from './FlexBox.types';
import { getFlexCssProperties } from './helper';

// as 적용을 위한 wrapper
const Wrapper = styled.div`
  display: flex;
`;

const FlexBox: FlexBoxComponent = forwardRef(
  <T extends ElementType = 'div'>(
    props: FlexBoxProps<T>,
    ref: ComponentPropsWithRef<T>['ref'],
  ) => {
    const { as = 'div', children, sx } = props;
    const theme = useTheme();
    const css = sx && getFlexCssProperties(sx, theme);
    return (
      <Wrapper ref={ref} as={as} css={css}>
        {children}
      </Wrapper>
    );
  },
);

export default FlexBox;
