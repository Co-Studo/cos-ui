import { ChangeEvent, FocusEvent, useEffect } from 'react';

import { useFormContext, ValidationMode } from '@components/Form/Form';
import { validate } from '@utils/validation';

type InputEvent = ChangeEvent<HTMLInputElement> | FocusEvent<HTMLInputElement>;

export type SubscribeReturns = {
  [x: string]: (event: InputEvent) => void;
};

export type Subscribe = (
  validates?: (<V>(value: V) => boolean)[],
) => SubscribeReturns;

export type FormHookReturns = {
  value: string;
  error: string;
  subscribe: Subscribe;
  validationMode: ValidationMode;
};

const useForm = (name: string, initValue?: string): FormHookReturns => {
  const context = useFormContext();

  const {
    values,
    setValues,
    errors,
    setErrors,
    validationMode = 'onBlur',
  } = context;

  useEffect(() => {
    setValues((prev) => ({ ...prev, [name]: initValue || '' }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  }, []);

  const value = values?.[name];
  const error = errors?.[name];

  const subscribe: Subscribe = (validates) => {
    const handleEvent = ({ target }: InputEvent) => {
      const targetValue = target.value;
      setValues((prev) => ({ ...prev, [name]: targetValue }));

      if (validates) {
        const { ok, message = '' } = validate(targetValue, ...validates);
        setErrors((prev) => ({ ...prev, [name]: ok ? '' : message }));
      }
    };

    return { [validationMode]: handleEvent };
  };

  return { value, error, subscribe, validationMode };
};

export default useForm;
