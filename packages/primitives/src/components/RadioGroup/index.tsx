import {
  ReactNode,
  useContext,
  createContext,
  ChangeEvent,
  cloneElement,
  Children,
  isValidElement,
} from 'react';

interface RadioState {
  selectedValue: string;
}

const RadioGroupContext = createContext<RadioState | null>(null);
RadioGroupContext.displayName = 'RadioGroupContext';

const useRadioContext = () => {
  const context = useContext(RadioGroupContext);
  if (!context) {
    throw new Error(
      'useRadioContext should be used within RadioGroupContext.Provider',
    );
  }
  return context;
};

const passPropsToChildren = <T, >(children: ReactNode, props: Partial<T>) =>
  Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { ...props });
    }
    return child;
  });

export interface RadioGroupProps extends RadioState {
  name: string;
  children: ReactNode;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RadioGroup = ({
                      selectedValue,
                      name,
                      children,
                      onChange,
                      ...restProps
                    }: RadioGroupProps) => {
  const state = { selectedValue };
  const childrenProps = { name, onChange };
  return (
    <RadioGroupContext.Provider value={state}>
      <div {...restProps}>{passPropsToChildren(children, childrenProps)}</div>
    </RadioGroupContext.Provider>
  );
};

type OptionProps = {
  id?: string;
  name?: string;
  value: string;
  children: ReactNode;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Option = ({
                  id,
                  name,
                  value,
                  children,
                  onChange,
                  disabled,
                  ...restProps
                }: OptionProps) => {
  const { selectedValue } = useRadioContext();
  const optionId = id || `option-${name}-${value}`;
  return (
    <div {...restProps}>
      <input
        type='radio'
        id={optionId}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        checked={value === selectedValue}
      />
      <label htmlFor={optionId}>{children}</label>
    </div>
  );
};

RadioGroup.Option = Option;

export default RadioGroup;
