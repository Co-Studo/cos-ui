# Dropdown

Dropdown은 Trigger, List, Item 컴포넌트로 이루어져 있으며 Dropdown 컴포넌트로 감싼 형태로 사용해야 합니다.
Trigger 컴포넌트를 통해 Dropdown 의 open 상태를 toggle 합니다.

## Props

### Trigger

- `trigger` : Trigger 역할을 할 컴포넌트를 지정합니다.

### List

- `transformOrigin` : Trigger 컴포넌트를 통해 List 가 open 되었을 때 List UI 의 시작 위치를 설정합니다. `default: left`

## Usage

```tsx
const DropdownPage = () => {
  const handleLogoutClick = () => {};
  return (
    <Dropdown>
      <Dropdown.Trigger
        trigger={
          <Avatar
            src="https://user-images.githubusercontent.com/62706988/203609246-bda4fa49-e490-4bcb-a886-ccac3af7d24f.svg"
            alt="avatar"
          />
        }
      />
      <Dropdown.List transformOrigin="left">
        <Dropdown.Item onClick={handleLogoutClick}>로그아웃</Dropdown.Item>
      </Dropdown.List>
    </Dropdown>
  );
};
```
