import {
  createContext,
  Dispatch,
  FormEvent,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

export type ValidationMode = 'onChange' | 'onBlur' | 'onSubmit';

type FormContextType = {
  values: Record<string, string>;
  setValues: Dispatch<SetStateAction<Record<string, string>>>;
  errors: Record<string, string>;
  setErrors: Dispatch<SetStateAction<Record<string, string>>>;
  validationMode?: ValidationMode;
};

export const FormContext = createContext<FormContextType | null>(null);
FormContext.displayName = 'FormContext';

export const useFormContext = () => {
  const context = useContext(FormContext);
  return context;
};

type FormProps = {
  validationMode?: ValidationMode;
  children: ReactNode;
  onSubmit?: (
    e: FormEvent<HTMLFormElement>,
    values: Record<string, string>,
  ) => void;
};

const Form = ({
  validationMode,
  children,
  onSubmit,
  ...restProps
}: FormProps) => {
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSubmit) onSubmit(event, values);
  };

  return (
    <FormContext.Provider
      value={{ values, setValues, errors, setErrors, validationMode }}
    >
      <form onSubmit={handleSubmit} {...restProps}>
        {children}
      </form>
    </FormContext.Provider>
  );
};

export default Form;
