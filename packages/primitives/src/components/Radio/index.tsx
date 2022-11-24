import {
  ReactNode,
  useContext,
  createContext,
  ChangeEvent,
  cloneElement,
  Children,
  isValidElement,
} from 'react';

import useForm from '@hooks/useForm';

interface RadioState {
  selectedValue: string;
}

const RadioContext = createContext<RadioState | null>(null);
RadioContext.displayName = 'RadioContext';

const useRadioContext = () => {
  const context = useContext(RadioContext);
  if (!context) {
    throw new Error(
      'useRadioContext should be used within RadioContext.Provider',
    );
  }
  return context;
};

const passPropsToChildren = <T,>(children: ReactNode, props: Partial<T>) =>
  Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { ...props });
    }
    return child;
  });

export interface RadioProps extends RadioState {
  name: string;
  children: ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Radio = ({
  selectedValue = '',
  name,
  children,
  onChange,
  ...restProps
}: RadioProps) => {
  const state = { selectedValue };
  const childrenProps = { name, onChange };

  return (
    <RadioContext.Provider value={state}>
      <div {...restProps}>{passPropsToChildren(children, childrenProps)}</div>
    </RadioContext.Provider>
  );
};

type OptionProps = {
  id?: string;
  name?: string;
  value: string;
  children: ReactNode;
  disabled?: boolean;
  validates?: (<V>(value: V) => boolean)[];
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Option = ({
  id,
  name = '',
  value,
  children,
  onChange,
  disabled,
  validates,
  ...restProps
}: OptionProps) => {
  const { selectedValue } = useRadioContext();
  const {
    value: formValue,
    subscribe = () => {},
    validationMode = 'onChange',
  } = useForm(name, selectedValue) ?? {};

  const optionId = id || `option-${name}-${value}`;
  const isChecked = (formValue ?? selectedValue) === value;
  const handleChange = onChange ?? subscribe(validates)[validationMode];

  return (
    <div {...restProps}>
      <input
        type="radio"
        id={optionId}
        name={name}
        value={value}
        disabled={disabled}
        defaultChecked={isChecked}
        onChange={handleChange}
      />
      <label htmlFor={optionId}>{children}</label>
    </div>
  );
};

Radio.Option = Option;

export default Radio;
