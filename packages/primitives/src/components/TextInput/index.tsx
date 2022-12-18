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
  isError?: boolean;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  min?: string;
  max?: string;
  pattern?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
};

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
