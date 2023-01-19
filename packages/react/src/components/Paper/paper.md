# Paper

`border-radius` 와 `box-shadow` 를 가진 Container 컴포넌트입니다.
`sx` prop 을 통해 `border-radius`, `box-shadow` 를 수정할 수 있으며 `FlexBox` 의 `sx` 를 사용하면 `FlexBox` 가 적용됩니다.
`onClick` 이벤트를 받으면 `Cursor` 가 `Pointer` 로 변경되고, hover css (transform scale) 가 적용됩니다.

### SX

```tsx
type BasePaperSX = {
  borderRadius?: string;
  boxShadow?: string;
};

interface FlexPaperSX extends FlexBoxSX, BasePaperSX {}

type BasePaperProps = {
  children: ReactNode;
  onClick?: (e: MouseEvent) => void;
  sx?: BasePaperSX;
};

type FlexPaperProps = {
  children: ReactNode;
  onClick?: (e: MouseEvent) => void;
  sx?: FlexPaperSX;
};

type PaperProps = FlexPaperProps;
```

### Usage

```tsx
  <Paper
    onClick={() => {...}}
    sx={{
      borderRadius: '1rem',
      gap: 2,
    }}
  >
    <Text>Clickable Paper</Text>
    <Text>Clickable Paper</Text>
    <Text>Clickable Paper</Text>
  </Paper>
```
