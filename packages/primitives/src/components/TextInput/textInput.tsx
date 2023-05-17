import { useId } from 'react';

import { TextInputProps } from './textInput.types';

/**
 *
 * @name TextInput
 * @description 1줄의 텍스트를 입력하고 검증 상태를 나타낼 수 있는 컴포넌트입니다.
 * @props type - text(default) | email | number | password | search | tel | date | url
 * @props isError - 입력 값 검증 실패
 * @props isSuccess - 입력 값 검증 성공
 * @example
 * ```tsx
 * <TextInput
      name="textInputExample"
      onChange={handleOnChange}
      defaultValue="default_Input_Value"
      isError={isError}
      required
    />
 * ```
 */
const TextInput = (props: TextInputProps) => {
  const { id, type = 'text', isError, ...restProps } = props;
  const randomId = useId();
  const inputId = id ?? randomId;
  return (
    <input
      id={inputId}
      type={type}
      data-error={isError}
      aria-invalid={isError}
      aria-labelledby={inputId}
      aria-describedby={`${inputId}-helper`}
      {...restProps}
    />
  );
};

export default TextInput;
