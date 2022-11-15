import { ReactNode, useId } from 'react';

import useForm from '@hooks/useForm';

type InputTypes =
  | 'text'
  | 'email'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'url';

type TextFieldProps = {
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
  placeholder,
  ...restProps
}: TextFieldProps) => {
  const { subscribe, error } = useForm(name, defaultValue);
  const inputId = useId();

  return (
    <div {...restProps}>
      {label && (
        <label htmlFor={inputId} data-error={Boolean(error)}>
          {label}
        </label>
      )}
      <input
        name={name}
        id={inputId}
        defaultValue={defaultValue}
        placeholder={placeholder}
        data-error={Boolean(error)}
        aria-invalid={Boolean(error)}
        aria-labelledby={inputId}
        aria-describedby={`${inputId}-helper`}
        {...subscribe(validates)}
      />
      {Boolean(error) && <span id={`${inputId}-helper`}>{error}</span>}
    </div>
  );
};

export default TextField;
