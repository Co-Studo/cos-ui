import { Dispatch, FormEvent, ReactNode, SetStateAction } from 'react';

export type ValidationMode = 'onChange' | 'onBlur' | 'onSubmit';

export type FormContextType = {
  values: Record<string, string>;
  setValues: Dispatch<SetStateAction<Record<string, string>>>;
  errors: Record<string, string>;
  setErrors: Dispatch<SetStateAction<Record<string, string>>>;
  validationMode?: ValidationMode;
};

export type FormProps = {
  validationMode?: ValidationMode;
  children: ReactNode;
  onSubmit?: (
    event: FormEvent<HTMLFormElement>,
    values: Record<string, string>,
  ) => void;
};
