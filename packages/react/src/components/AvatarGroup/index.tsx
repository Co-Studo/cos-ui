import { Children, cloneElement, ReactElement, ReactNode } from 'react';
import styled, { css, useTheme } from 'styled-components';

import Avatar from '@components/Avatar';

type AvatarGroupProps = {
  children: ReactNode;
  max?: number;
  total?: number;
  flexAlign?: 'flex-start' | 'center' | 'flex-end';
  spacing?: 'small' | 'large';
};

const SPACING_OPTIONS = {
  small: '-1.5rem',
  large: '-0.5rem',
};

const AvatarGroupAvatar = styled(Avatar)`
  border: 2px solid ${({ theme }) => theme.palette.neutral_1_light};
  background-color: ${({ theme }) => theme.palette.neutral_2};
  color: ${({ theme }) => theme.palette.white};
  margin-left: -0.5rem;

  &:first-child {
    margin-left: 0;
  }
`;

const AvatarGroup = (props: AvatarGroupProps) => {
  const {
    children: childrenProp,
    max = 5,
    total = Children.count(childrenProp),
    flexAlign = 'center',
    spacing = 'small',
  } = props;

  const theme = useTheme();

  // child.props 처럼 props 속성을 사용하기 위해 as 사용
  const children = Children.toArray(childrenProp) as ReactElement[];

  if (total > max) {
    return (
      <div
        css={css`
          display: flex;
          align-items: ${flexAlign};
        `}
      >
        {children.slice(0, max).map((child, index) => {
          if (index === max - 1) {
            return (
              <AvatarGroupAvatar
                sx={{
                  width: child.props.sx.width,
                  height: child.props.sx.height,
                  fontSize: `calc(${child.props.sx.width} / 2)`,
                }}
              >
                {`+${total - max + 1}`}
              </AvatarGroupAvatar>
            );
          }
          return cloneElement(child, {
            sx: {
              ...child.props.sx,
              border: `2px solid ${theme.palette.neutral_1_light}`,
              ...(index === 0 ? {} : { marginLeft: SPACING_OPTIONS[spacing] }),
            },
          });
        })}
      </div>
    );
  }

  return (
    <div>
      {children.map((child, index) =>
        cloneElement(child, {
          sx: {
            ...child.props.sx,
            border: `2px solid ${theme.palette.neutral_1_light}`,
            ...(index === 0 ? {} : { marginLeft: SPACING_OPTIONS[spacing] }),
          },
        }),
      )}
    </div>
  );
};

export default AvatarGroup;
