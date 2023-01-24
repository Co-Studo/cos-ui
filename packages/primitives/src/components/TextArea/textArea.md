# TextArea

여러 줄의 텍스트를 입력하고 검증 상태(isError, isSuccess)를 나타낼 수 있는 컴포넌트입니다. `cols`, `rows` 를 사용해 사이즈를 지정하고, `resize` 속성을 통해 사용자의 컴포넌트 사이즈 임의 변경 여부를 설정할 수 있습니다.

## Props

- `id`: textArea 의 id
- `name` : textArea의 이름
- `value` : textArea 의 값
- `defaultValue` : textArea의 기본값
- `placeholder`: textArea 의 도움말
- `cols`: textArea 의 가로 크기(글자 수 제한)
- `rows`: textArea 의 세로 크기(글자 수 제한)
- `required`: 필수 입력 여부
- `resize`
  - `none` : 변경 불가능
  - `horizontal` : 가로 사이즈 변경 가능
  - `vertical` : 세로 사이즈 변경 가능
  - `both` : 가로 세로 모두 변경 가능
- `isError` : 입력값 검증 실패 여부
- `isSuccess` : 입력값 검증 성공 여부
- `onChange` : textArea 에 onChange 이벤트 발생 시 처리할 핸들러
- `onBlur` : textArea 에 onBlur 이벤트 발생 시 처리할 핸들러

## Usage

```tsx
const TextAreaDemo = () => {
  const [value, setValue] = useState('');

  const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const currentValue = target.value;
    setValue(currentValue);
  };

  return (
    <div>
      <Text variant="sectionTitle">TextArea</Text>
      <TextArea
        name="textAreaExample"
        resize="vertical"
        cols={30}
        rows={30}
        onChange={handleOnChange}
      />
    </div>
  );
};
```
