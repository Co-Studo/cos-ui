# AvatarGroup

`AvatarGroup` 은 `avatars` 를 prop 으로 전달받아 [`Avatar` 컴포넌트](https://github.com/Co-Studo/cos-ui/tree/dev/packages/react/src/components/Avatar/avatar.md) 로 렌더링하는 컴포넌트 입니다.
`max` prop 을 통해 `Avatar` 가 보여질 최대 갯수를 지정하여 만약 그 수가 넘을 경우 마지막 `Avatar` 에서 `아바타 갯수의 합` - `max` + `1` 만큼의 갯수가 보여집니다

ex) 4 개의 아바타를 받았는데 최대 3개만 보여주고 싶은 경우 마지막 `Avatar` 는 `4` - `3` + `1` = `2` 을 표시합니다.

## Props

- `max` : `Avatar` 가 보여질 최대 갯수를 지정합니다. `default: 5`
- `spacing` : `Avatar` 간의 간격을 `small`, `medium`, `large` 중 선택할 수 있습니다. `default: small`
- `size` : `Avatar` 들의 사이즈를 지정합니다. `default: small`
- `avatars` : Avatar 의 정보를 담는 배열을 입력합니다. `ex) AvatarProps[]`

## Usage

```tsx
const AvatarPage = () => (
  <FlexBox sx={{ flexDirection: 'column', gap: 1 }}>
    <Text variant="sectionTitle">Avatar Group</Text>
    <AvatarGroup max={3} spacing="small" avatars={AVATARS} />
  </FlexBox>
);
```
