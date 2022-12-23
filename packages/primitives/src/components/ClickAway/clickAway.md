# Click Away

Click Away 의 Trigger 로 동작할 컴포넌트의 부모 컴포넌트로 감싸 사용합니다.
Trigger 를 누르면 Click Away 컴포넌트의 state 가 toggle 되며, 화면 전체를 감싸는 엘리먼트가 생성되어 바깥영역 클릭을 감지합니다.

## Usage

```tsx
const Dropdown = ({ children }: DropdownProps) => {
  const dropdownReducer = useReducer(reducer, initState);
  return (
    <ClickAway>
      <DropdownContext.Provider value={dropdownReducer}>
        <div
          css={css`
            position: relative;
          `}
        >
          {children}
        </div>
      </DropdownContext.Provider>
    </ClickAway>
  );
};
```
