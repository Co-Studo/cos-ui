# TextInput

1줄의 텍스트를 입력하고 검증 상태(isError, isSuccess)를 나타낼 수 있는 컴포넌트입니다. 기본 입력 타입은 `text` 입니다.

## Props

- `id` : id 값
- `name` : 이름
- `type`
  - `text(default)` : 문자열
  - `email` : 이메일
  - `number` : 숫자
  - `password` : 비밀번호
  - `search` : 검색어
  - `tel` : 전화번호
  - `date` : 날짜
  - `url` : 웹 주소
- `value` : 값
- `defaultValue` : 기본값
- `placeholder`: 도움말
- `min`: date, number 타입의 최솟값
- `max`: date, number 타입의 최댓값
- `pattern`: 정규식
- `required` : 필수 입력 여부
- `isError`: 입력값 검증 실패
- `isSuccess`: 입력값 검증 성공
- `onChange`: onChange 이벤트 발생 시 처리할 핸들러
- `onBlur`: onBlur 이벤트 발생 시 처리할 핸들러

```tsx
export type TextInputProps = {
  id?: string;
  name?: string;
  type?: TextInputTypes;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  min?: string;
  max?: string;
  pattern?: string;
  required?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
};
```

## Usage

```tsx
const TextInputDemo = () => {
  const [value, setValue] = useState('');
  const [isError, setIsError] = useState(false);

  const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const currentValue = target.value;
    setValue(currentValue);
    setIsError(currentValue.length > 10);
  };

  return (
    <TextInput
      name="textInputExample"
      onChange={handleOnChange}
      isError={isError}
      required
    />
  );
};
```
