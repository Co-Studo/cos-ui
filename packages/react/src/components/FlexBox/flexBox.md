# FlexBox

`div` 를 기본으로 사용하며 `display:flex;` 가 기본으로 설정된 레이아웃 컴포넌트 입니다.

display flex 관련 css 속성을 sx 에서 사용할 수 있으며 이외 size, background-color 관련 속성을 사용할 수 있습니다.
`as` prop 을 통한 Element 형변환 또한 가능합니다. `as` 로 형변환 한 이후 ref 사용시 useRef 제네릭에 올바른 타입을 지정해야 합니다.

### SX

```tsx
export type SizeSX = {
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  height?: string;
  maxHeight?: string;
  minHeight?: string;
};

export type StyleSX = {
  bgColor?: keyof Palette;
};

export interface FlexBoxSX extends SizeSX, SpacingSX, StyleSX {
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  flexDirection?: 'row' | 'column';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: SpacingValue;
}

type FlexBoxProps<T extends ElementType> = {
  as?: T;
  sx?: FlexBoxSX;
} & ComponentPropsWithoutRef<T>;

type FlexBoxComponent = <C extends ElementType = 'div'>(
  props: FlexBoxProps<C> & { ref?: ComponentPropsWithRef<C>['ref'] },
) => ReactElement | null;
```

### Usage

```tsx
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
```
