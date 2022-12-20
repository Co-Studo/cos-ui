# Avatar

`src` 속성에 이미지를 넣는 경우 `size` 에 맞는 크기로 동그란 컴포넌트가 생성됩니다.
만약 `src` 가 지정되지 않고, `children` 으로 문자열 을 사용하는 경우 글자수에 맞게 문자열 아바타가 생성됩니다.

## Props

- `src` : `Avatar` 에 적용할 이미지의 경로를 입력합니다.
- `alt` : 이미지의 텍스트 설명입니다.
- `size` : `small`, `medium`, `large` 중 선택할 수 있습니다. `default: medium`
- `sx` : `border`, `borderRadius`, `backgroundColor`, `color` 이외 `Spacing` 관련 속성을 활용할 수 있습니다.

## SX

```tsx
type AvatarSize = 'small' | 'medium' | 'large';

interface AvatarSX extends SpacingSX {
  border?: string;
  borderRadius?: string;
  backgroundColor?: keyof Palette;
  color?: keyof Palette;
}
```

## Usage

```tsx
const AvatarPage = () => (
  <FlexBox sx={{ flexDirection: 'column', gap: 1 }}>
    <Avatar src={image.src} alt={image.name} size="large" />
    <Avatar sx={{ backgroundColor: 'primary' }}>박상진</Avatar>
  </FlexBox>
);
```
