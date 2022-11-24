import { ReactNode, useId } from 'react';

import useForm from '@hooks/useForm';

type InputTypes =
  | 'text'
  | 'email'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'date'
  | 'url';

export type TextFieldProps = {
  validates?: (<V>(value: V) => boolean)[];
  defaultValue?: string;
  label?: ReactNode;
  name: string;
  type?: InputTypes;
  placeholder?: string;
};

const TextField = ({
  validates,
  defaultValue,
  label,
  name,
  type,
  placeholder,
  ...restProps
}: TextFieldProps) => {
  const { subscribe = () => {}, error } = useForm(name, defaultValue) ?? {};
  const inputId = useId();
  const isError = Boolean(error);

  return (
    <div {...restProps}>
      {label && (
        <label htmlFor={inputId} data-error={isError}>
          {label}
        </label>
      )}
      <input
        name={name}
        id={inputId}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        data-error={isError}
        aria-invalid={isError}
        aria-labelledby={inputId}
        aria-describedby={`${inputId}-helper`}
        {...subscribe(validates)}
      />
      {isError && <span id={`${inputId}-helper`}>{error}</span>}
    </div>
  );
};

export default TextField;
