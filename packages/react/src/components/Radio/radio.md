# Radio

[Primitives Radio](https://github.com/Co-Studo/cos-ui/blob/dev/packages/primitives/src/components/Radio/radio.md) 컴포넌트에 스타일을 입힌 컴포넌트입니다.
Primitive Radio 컴포넌트와 다르게 루트 컴포넌트를 Radio.Group으로 사용해야 합니다.

## Usage

```tsx
const StyledRadioDemo = () => {
  const [selectedValue, setValue] = useState('public');

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Radio.Group
      name="check-out-setting"
      selectedValue={selectedValue}
      onChange={handleOnChange}
    >
      <Radio.Option value="public">공개</Radio.Option>
      <Radio.Option value="private">비공개</Radio.Option>
    </Radio.Group>
  );
};
```
