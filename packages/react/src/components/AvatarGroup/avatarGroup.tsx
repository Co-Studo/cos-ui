import { Children, cloneElement, ReactElement, ReactNode } from 'react';
import styled, { useTheme } from 'styled-components';

import Avatar, { AvatarProps } from '@components/Avatar';
import FlexBox from '@components/FlexBox';
import Text from '@components/Text';

type AvatarGroupProps = {
  children: ReactNode;
  max?: number;
  total?: number;
  spacing?: 'small' | 'medium' | 'large';
};

const FONT_SIZE_BY_STRING_LEN = {
  small: {
    1: 'small',
    2: 'xSmall',
    3: 'xxSmall',
    4: 'xxSmall',
  },
  medium: {
    1: 'medium',
    2: 'small',
    3: 'xSmall',
    4: 'xSmall',
  },
  large: {
    1: 'large',
    2: 'medium',
    3: 'medium',
    4: 'small',
  },
};

const SPACING_OPTIONS = {
  small: '-1.5rem',
  medium: '-1rem',
  large: '-0.5rem',
};

const MAX_VIEW_COUNT = 9999;

const AvatarGroupAvatar = styled(Avatar)<Partial<AvatarGroupProps>>`
  border: 2px solid ${({ theme }) => theme.palette.white};
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
  const theme = useTheme();

  // child.props 처럼 props 속성을 사용하기 위해 as 사용
  const children = Children.toArray(
    childrenProp,
  ) as ReactElement<AvatarProps>[];

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
                size={child.props.size}
              >
                <Text
                  sx={{
                    fontSize:
                      FONT_SIZE_BY_STRING_LEN[child.props.size || 'medium'][
                        String(total - max + 1).length
                      ],
                  }}
                >
                  {`+${
                    total - max + 1 <= MAX_VIEW_COUNT
                      ? total - max + 1
                      : MAX_VIEW_COUNT
                  }`}
                </Text>
              </AvatarGroupAvatar>
            );
          }
          return cloneElement(child, {
            // eslint-disable-next-line react/no-array-index-key
            key: index,
            sx: {
              ...child.props.sx,
              border: `2px solid ${theme.palette.white}`,
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
            border: `2px solid ${theme.palette.white}`,
            ...(index === 0 ? {} : { marginLeft: SPACING_OPTIONS[spacing] }),
          },
        }),
      )}
    </FlexBox>
  );
};

export default AvatarGroup;
