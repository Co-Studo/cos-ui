import type { SpacingProps } from './Spacing.types';

/**
 *
 * @name Spacing
 * @description 요소간 간격을 주기 위한 Spacing 컴포넌트 입니다.
 * @props `size` : width, height 에 지정할 사이즈를 입력합니다. `default: 1rem`
 * @props `sx` : `SizeSX` 관련 속성을 활용할 수 있습니다.
 * @example
 * ```tsx
 *  <Spacing size="6.5rem" />
 * ```
 */
const Spacing = (props: SpacingProps) => {
  const { size = '1rem', sx } = props;
  return (
    <div
      css={{
        width: size,
        height: size,
        ...sx,
      }}
    />
  );
};

export default Spacing;
