import {
  Children,
  cloneElement,
  createContext,
  Dispatch,
  forwardRef,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
  useEffect,
} from 'react';

import useInputValidation, {
  Validity,
} from '@components/TextField/useTextValidation';

const initState: Validity = {
  isPass: false,
  isError: false,
};

type TextFieldState = [
  validity: Validity,
  setValidity: Dispatch<SetStateAction<Validity>>,
];

const TextFieldContext = createContext<TextFieldState | null>(null);
TextFieldContext.displayName = 'TextFieldContext';

const useTextFieldContext = () => {
  const context = useContext(TextFieldContext);
  if (!context) {
    throw new Error(
      'useTextFieldContext should be used within TextFieldContext.Provider',
    );
  }
  return context;
};

export interface TextFieldProps {
  id?: string;
  name: string;
  children: ReactElement | ReactElement[];
}

const TextField = ({ id, name, children, ...restProps }: TextFieldProps) => {
  const inputId = id ?? `input-${name}`;
  const validityState = useState(initState);

  return (
    <TextFieldContext.Provider value={validityState}>
      <div {...restProps}>
        {Children.map(children, (child) =>
          cloneElement(child, { id: inputId, name }),
        )}
      </div>
    </TextFieldContext.Provider>
  );
};

type TextInputType =
  | 'text'
  | 'email'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'url';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: TextInputType;
  onValidate?: (result: Validity) => void;
  validate?: (value: string) => boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      validate,
      onValidate,
      type,
      id,
      name,
      required,
      onChange,
      onBlur,
      ...restProps
    },
    ref,
  ) => {
    const [{ isPass, isError }, setValidity] = useTextFieldContext();
    const { validity, eventWrapper } = useInputValidation({
      validate,
      onValidate,
    });

    useEffect(() => {
      setValidity(validity);
    }, [validity, setValidity]);

    return (
      <input
        type={type}
        id={id}
        ref={ref}
        data-error={isError}
        data-passed={isPass}
        aria-invalid={!isPass}
        aria-required={required}
        aria-labelledby={id}
        aria-describedby={`${id}-helper`}
        onChange={(e) => eventWrapper(e, onChange)}
        onBlur={(e) => eventWrapper(e, onBlur)}
        {...restProps}
      />
    );
  },
);

type TextFieldChildProps = {
  id?: string;
  children: ReactNode;
};

const Label = ({ id, children, ...restProps }: TextFieldChildProps) => {
  const [{ isPass, isError }] = useTextFieldContext();
  return (
    <label
      htmlFor={id}
      data-error={isError}
      data-passed={isPass}
      {...restProps}
    >
      {children}
    </label>
  );
};

const HelperText = ({ id, children, ...restProps }: TextFieldChildProps) => {
  const [{ isPass, isError }] = useTextFieldContext();
  return (
    <div
      id={`${id}-helper`}
      data-error={isError}
      data-passed={isPass}
      {...restProps}
    >
      {children}
    </div>
  );
};

TextField.Input = Input;
TextField.Label = Label;
TextField.HelperText = HelperText;

export default TextField;
