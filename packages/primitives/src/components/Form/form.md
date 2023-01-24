# Form

Context API 를 활용하여 제어 컴포넌트로 구현된 Form 컴포넌트입니다.
하위 input 컴포넌트들의 입력값과 검증 상태를 관리합니다.

[useForm](https://github.com/Co-Studo/cos-ui/blob/feat/form/%2324/packages/primitives/src/hooks/useForm.ts) 을 사용하여 해당 Form 으로 관리 할 수 있는 하위 Input 컴포넌트를 구현할 수 있습니다.  
또는 useForm 이 적용된 Field, RadioField, TextField 컴포넌트로 별도의 구현 없이 쉽게 입력 필드를 추가할 수 있습니다.

### Props

- `validationMode` : Input Field 들의 입력값 업데이트와 검증을 어떤 이벤트를 통해 트리거 할지 결정합니다.
  - `onChange` : input 의 onChange 이벤트 발생 시
  - `onBlur` : input 의 onBlur 이벤트 발생 시
  - `onSubmit` : form 의 onSubmit 이벤트 발생 시
- `onSubmit` : form 의 onSubmit 이벤트의 handler 를 설정합니다. 두번째 매개변수인 values 를 통해 하위 Input 필드들의 입력값을 받아 처리 할 수 있습니다.
  - `event` : form 이벤트 객체
  - `values` : 하위 필드들의 입력값

### Usage

```tsx
const ChangeFormPage = () => (
  <Form onSubmit={handleSubmit} validationMode="onChange">
    <Form.TextField
      name="study_name"
      label="스터디 이름"
      validates={[checkRequired, checkTitle]}
      placeholder="8자 이내로 스터디 이름을 입력해주세요."
    />
    <Form.TextField
      type="number"
      name="max_people"
      label="최대 인원"
      defaultValue="3"
      validates={[checkRequired, checkMinCount, checkMaxCount]}
      placeholder="스터디 최소 인원은 3명, 최대 인원은 10명입니다."
    />
    <Form.TextField
      type="multiline"
      name="description"
      label="스터디 소개"
      validates={[checkRequired]}
      placeholder="스터디 소개를 작성해주세요."
    />
    <Form.RadioField
      name="personal_information"
      label="개인정보 수집 동의"
      validates={[checkAgree]}
      options={[
        { value: 'agree', label: '동의' },
        { value: 'disagree', label: '비동의' },
      ]}
    />
    <FlexBox sx={{ justifyContent: 'center' }}>
      <Button type="submit" size="medium">
        제출
      </Button>
    </FlexBox>
  </Form>
);
```

#### Validate Function Template

```tsx
const checkData = (value) => {
  if (!value || value.length <= 0) {
    throw Error(`필수 입력 정보입니다!`);
  }

  return true;
};
```

- 인자로 검증하고자 하는 value 값을 입력받는다.
- 조건에 맞지 않으면 `Error` 객체를 throw 한다.
- 조건을 통과하면 true를 return 한다.
- 위의 형식으로 구현된 검증 함수들을 배열로 묶어 입력하면 [validate를 위한 pipe 함수](https://github.com/Co-Studo/cos-ui/blob/0913e4078a4dcbd873a5906f9948668a9d3446aa/packages/primitives/src/utils/validation.ts#L22)를 이용하여 순차적으로 처리한다.

---

## Form 의 입력 필드를 구현하는 방법

### 1. useForm 을 사용하여 직접 구현

[useForm](https://github.com/Co-Studo/cos-ui/blob/feat/form/%2324/packages/primitives/src/hooks/useForm.ts) 은 Form 컴포넌트의 Input 필드를 만들기 위한 custom hook 입니다.  
Input 필드로 만들고자 하는 컴포넌트에 정해진 방식대로 사용합니다.  
자유롭게 원하는 형식의 입력 필드 컴포넌트를 구현할 수 있습니다.

### params

- `name` : Form 에 등록하기 위한 입력 필드의 이름입니다. 이후 Form 의 onSubmit 이벤트 핸들러의 두번째 매개변수 values의 key 값으로 ㅁ
- `initValue` : 해당 필드의 초기값입니다. default value 는 `''` 입니다.

### returns

- `value` : 해당 필드의 현재 입력 값
- `error` : 해당 필드의 입력 검증 실패 시의 error 메세지
- `validationMode` : 현재 form 컴포넌트에 적용된 validationMode
- `subscribe` : 관리하고자 하는 input 의 상태 관리 로직을 설정할 구독 함수, 인자로 입력값 검증 함수의 배열을 입력받는다.
  ```tsx
  export type Subscribe = (validates?: (<V>(value: V) => boolean)[]) => {
    [x: string]: (
      event: ChangeEvent<HTMLInputElement> | FocusEvent<HTMLInputElement>,
    ) => void;
  };
  ```

### Usage

```tsx
const AnyField = ({ name, id, type, defaultValue }) => {
  const { subscribe, error } = useForm(name, defaultValue);

  return (
    <div>
      <input
        name={name}
        id={id}
        type={type}
        defaultValue={defaultValue}
        {...subscribe(validates)}
        // 컨트롤 하고 싶은 input 에 subscribe 함수를 반드시 적용해야 합니다.
      />
      {Boolean(isError) && <span>{error}</span>}
    </div>
  );
};
```

## 2. Field 컴포넌트를 이용하여 구현

[useForm](https://github.com/Co-Studo/cos-ui/blob/feat/form/%2324/packages/primitives/src/hooks/useForm.ts) 이 적용된 Form 컴포넌트의 입력 필드를 생성하기 위한 컴포넌트입니다.  
render props 방식으로 원하는 input 컴포넌트를 추가하여 구현할 수 있습니다.  
input 컴포넌트와 useForm 을 통한 Form 과의 의존성을 제거하여 각각 독립적으로 구현할 수 있습니다.

### Props

- `name(**required**)` : 입력 필드의 이름이자 key 값
- `label` : 입력 필드의 라벨
- `defaultValue` : 입력 필드의 초기값
- `isShowError` : Error 메세지의 출력 여부로 기본값은 `true`입니다.
- `validates` : 입력 필드의 검증 함수 배열, 앞에서부터 순차적으로 실행
- `render` : 실질적인 input 컴포넌트를 생성하는 render 함수
  - `subscribe` : Form 의 입력필드가 되기 위해 필요한 props 객체로 반드시 props로 넘겨줘야 합니다. `id`, `name`, `defaultValue` 정보를 가지고 있습니다.
  - `result` : 입력값, 에러 메세지를 가지고 있는 객체로 input 컴포넌트 구현 시 사용됩니다.

### Usage

```tsx
<Form.Field
  name="study_name"
  label="스터디 이름"
  validates={[checkRequired, checkTitle]}
  render={(subscribe, { error }) => (
    <TextInput
      isError={Boolean(error)}
      placeholder="8자 이내로 스터디 이름을 입력해주세요."
      {...subscribe}
    />
  )}
/>
```

## 3. TextField, RadioField

Form 컴포넌트의 입력 필드로 사용하기 위해 cos-ui 의 Input 컴포넌트들을 Field 컴포넌트에 적용하여 구현한 컴포넌트들입니다.  
label, error 의 위치와 형식 그리고 Input 컴포넌트가 정해져있어 자유롭게 커스텀하여 입력 필드를 구현할 수 없지만 보다 선언적으로 쉽게 입력 필드를 구현할 수 있습니다.

### Usage

```tsx
    <Form.TextField
      type="number"
      name="max_people"
      label="최대 인원"
      defaultValue="3"
      validates={[checkRequired, checkMinCount, checkMaxCount]}
      placeholder="스터디 최소 인원은 3명, 최대 인원은 10명입니다."
    />
    <Form.TextField
      type="multiline"
      name="description"
      label="스터디 소개"
      validates={[checkRequired]}
      placeholder="스터디 소개를 작성해주세요."
    />
    <Form.RadioField
      name="personal_information"
      label="개인정보 수집 동의"
      validates={[checkAgree]}
      options={[
        { value: 'agree', label: '동의' },
        { value: 'disagree', label: '비동의' },
      ]}
    />
```
