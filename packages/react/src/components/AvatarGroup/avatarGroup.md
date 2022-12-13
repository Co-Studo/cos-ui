# AvatarGroup

AvatarGroup 은 Avatar 컴포넌트와 같이 쓰이는 컴포넌트 입니다.

### Option Value

```
const SPACING_OPTIONS = {
  small: '-1.5rem',
  medium: '-1rem',
  large: '-0.5rem',
};
```

### Props

- `max` : Avatar 가 보여질 최대 갯수를 지정합니다. `default: 5`
- `total`
- `spacing` : Avatar 간의 간격을 지정합니다. `default: small`

### Usage

```tsx
const AvatarPage = () => (
  <FlexBox sx={{ flexDirection: 'column', gap: 1 }}>
    <Text variant="sectionTitle">Avatar Group</Text>
    <AvatarGroup max={3} spacing="small">
      {AVATARS.slice(0, 2).map((avatar) => (
        <Avatar
          key={avatar.id}
          src={avatar.src}
          alt={avatar.name}
          sx={{ width: '4.2rem', height: '4.2rem' }}
        />
      ))}
    </AvatarGroup>
  </FlexBox>
);
```
