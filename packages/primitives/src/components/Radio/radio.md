# Radio

라디오 그룹을 생성할 수 있는 컴포넌트입니다.
최상위 컴포넌트인 Radio 에 그룹명(`name`)을 설정하고, 하위 컴포넌트인 Radio.Option 에 각각의 `value`를 설정하여 사용합니다.
Radio 컴포넌트에 설정한 `name` 은 하위 Option 컴포넌트에 그룹핑을 위해 props로 전달됩니다. 따라서 Option 컴포넌트에서 `name` 을 입력할 필요 없습니다.
라디오 그룹의 현재 선택된 Option은 외부에 상태를 두고 최상위 컴포넌트인 Radio의 `selectedValue` props를 통해 주입하여 `onChange` props를 통해 업데이트하여 사용합니다.

### Props

**1. Radio**

- `name` (**required**) : 라디오 그룹명
- `selectedValue` (**required**) : 현재 선택 된 라디오 버튼(Option/input) 의 value
- `onChange` (**required**) : 라디오 버튼 클릭 시 처리할 이벤트 핸들러

**1. Option**

- `value` (**required**) : 라디오 버튼의 값
- `disabled` : 비활성화 여부
- `onChange` : 라디오 버튼 클릭 시 Option 개별적으로 처리할 이벤트 핸들러

### Usage

```tsx
const RadioDemo = () => {
  const [selectedValue, setValue] = useState('public');

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Radio
      name="check-out-setting"
      selectedValue={selectedValue}
      onChange={handleOnChange}
    >
      <Radio.Option value="public">공개</Radio.Option>
      <Radio.Option value="private">비공개</Radio.Option>
    </Radio>
  );
};
```
