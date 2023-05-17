import { ChangeEvent, FocusEvent } from 'react';

export type TextInputTypes =
  | 'text'
  | 'email'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'date'
  | 'url';

// TODO : Input 의 기본 attribute 를 활용해서 리팩토링 ex) ComponentPropsWithoutRef<'input'> &
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
