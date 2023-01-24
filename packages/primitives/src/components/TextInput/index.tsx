import { ChangeEvent, FocusEvent, useId } from 'react';

export type TextInputTypes =
  | 'text'
  | 'email'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'date'
  | 'url';

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

const TextInput = ({
  id,
  type = 'text',
  isError,
  ...restProps
}: TextInputProps) => {
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
