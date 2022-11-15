import { ChangeEvent, FocusEvent, useEffect } from 'react';

import { useFormContext } from '@components/Form/Form';
import { validate } from '@utils/validation';

type InputEvent = ChangeEvent<HTMLInputElement> | FocusEvent<HTMLInputElement>;

type Subscribe = (validates?: (<V>(value: V) => boolean)[]) => {
  [x: string]: (event: InputEvent) => void;
};

export type FormHookReturns = {
  value: string;
  error: string;
  subscribe: Subscribe;
};

const useForm = (name: string, initValue?: string): FormHookReturns => {
  const {
    values,
    setValues,
    errors,
    setErrors,
    validationMode = 'onBlur',
  } = useFormContext();

  const value = values?.[name];
  const error = errors?.[name];

  const setValue = (newValue: string) => {
    setValues((prev) => ({ ...prev, [name]: newValue }));
  };
  const setError = (newError: string) => {
    setErrors((prev) => ({ ...prev, [name]: newError }));
  };

  useEffect(() => {
    setValue(initValue || '');
    setError('');
  }, []);

  const subscribe: Subscribe = (validates) => {
    const handleEvent = (event: InputEvent) => {
      const { value: targetValue } = event.target;

      setValue(targetValue);

      if (validates) {
        const { ok, message = '' } = validate(targetValue, ...validates);
        setError(ok ? '' : message);
      }
    };

    return { [validationMode]: handleEvent };
  };

  return { value, error, subscribe };
};

export default useForm;
