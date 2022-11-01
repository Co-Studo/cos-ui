import { ChangeEvent, FocusEvent, useEffect, useState } from 'react';

type InputEvent = ChangeEvent<HTMLInputElement> | FocusEvent<HTMLInputElement>;

export type Validity = {
  isPass?: boolean;
  isError?: boolean;
};

type ValidationParams = {
  onValidate?: (result: Validity) => void;
  validate?: (value: string) => boolean;
};

const useInputValidation = ({ validate, onValidate }: ValidationParams) => {
  const [validity, setValidity] = useState({ isPass: false, isError: false });

  const validateTarget = (target) => {
    if (!target.validity.valid || (validate && !validate(target.value))) {
      setValidity({ isError: true, isPass: false });
    } else setValidity({ isError: false, isPass: true });
  };

  const eventWrapper = <T extends InputEvent>(event: T, handleEvent) => {
    if (!handleEvent) {
      return;
    }

    validateTarget(event.target);
    handleEvent(event);
  };

  useEffect(() => {
    if (onValidate && typeof onValidate === 'function') {
      onValidate(validity);
    }
  }, [validity, onValidate]);

  return { validity, eventWrapper };
};

export default useInputValidation;
