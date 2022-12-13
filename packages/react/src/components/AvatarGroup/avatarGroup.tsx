import { Children, cloneElement, ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

import Avatar from '@components/Avatar';
import FlexBox from '@components/FlexBox';

type AvatarGroupProps = {
  children: ReactNode;
  max?: number;
  total?: number;
  spacing?: 'small' | 'medium' | 'large';
};

const FONT_SIZE_BY_STRING_LEN = {
  1: 2,
  2: 2.5,
  3: 3,
  4: 3.5,
};

const SPACING_OPTIONS = {
  small: '-1.5rem',
  medium: '-1rem',
  large: '-0.5rem',
};

const MAX_VIEW_COUNT = 9999;

const AvatarGroupAvatar = styled(Avatar)<Partial<AvatarGroupProps>>`
  border: 2px solid ${({ theme }) => theme.palette.neutral_1_light};
  background-color: ${({ theme }) => theme.palette.neutral_2};
  color: ${({ theme }) => theme.palette.white};
  padding: 2px 3px 0 0;
  margin-left: ${({ spacing }) => spacing && SPACING_OPTIONS[spacing]};

  &:first-child {
    margin-left: 0;
  }
`;

const AvatarGroup = (props: AvatarGroupProps) => {
  const {
    children: childrenProp,
    max = 5,
    total = Children.count(childrenProp),
    spacing = 'small',
  } = props;

  // child.props 처럼 props 속성을 사용하기 위해 as 사용
  const children = Children.toArray(childrenProp) as ReactElement[];

  if (total > max) {
    return (
      <FlexBox>
        {children.slice(0, max).map((child, index) => {
          if (index === max - 1) {
            return (
              <AvatarGroupAvatar
                // 변경 가능성 없는 index를 key로 사용
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                spacing={spacing}
                sx={{
                  width: child.props.sx.width,
                  height: child.props.sx.height,
                  fontSize: `calc(${child.props.sx.width} / ${
                    FONT_SIZE_BY_STRING_LEN[String(total - max + 1).length]
                  })`,
                }}
              >
                {`+${
                  total - max + 1 <= MAX_VIEW_COUNT
                    ? total - max + 1
                    : MAX_VIEW_COUNT
                }`}
              </AvatarGroupAvatar>
            );
          }
          return cloneElement(child, {
            // eslint-disable-next-line react/no-array-index-key
            key: index,
            sx: {
              ...child.props.sx,
              border: `2px solid inherit`,
              ...(index === 0 ? {} : { marginLeft: SPACING_OPTIONS[spacing] }),
            },
          });
        })}
      </FlexBox>
    );
  }

  return (
    <FlexBox>
      {children.map((child, index) =>
        cloneElement(child, {
          // eslint-disable-next-line react/no-array-index-key
          key: index,
          sx: {
            ...child.props.sx,
            border: `2px solid inherit`,
            ...(index === 0 ? {} : { marginLeft: SPACING_OPTIONS[spacing] }),
          },
        }),
      )}
    </FlexBox>
  );
};

export default AvatarGroup;
