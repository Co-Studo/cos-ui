import {
  ReactNode,
  useContext,
  createContext,
  ChangeEvent,
  cloneElement,
  Children,
  FocusEvent,
  isValidElement,
} from 'react';

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
  Children.map(children, (child) =>
    isValidElement(child) ? cloneElement(child, { ...props }) : child,
  );

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
}: RadioProps) => (
  <RadioContext.Provider value={{ selectedValue }}>
    <div {...restProps}>
      {passPropsToChildren(children, { name, onChange })}
    </div>
  </RadioContext.Provider>
);

type OptionProps = {
  id?: string;
  name?: string;
  value: string;
  children: ReactNode;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  className?: string;
};

const Option = ({
  id,
  name = '',
  value,
  children,
  disabled,
  onChange,
  onBlur,
  ...restProps
}: OptionProps) => {
  const { selectedValue } = useRadioContext();
  const optionId = id || `option-${name}-${value}`;
  return (
    <div {...restProps}>
      <input
        type="radio"
        id={optionId}
        name={name}
        value={value}
        disabled={disabled}
        defaultChecked={selectedValue === value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <label htmlFor={optionId}>{children}</label>
    </div>
  );
};

Option.displayName = 'Option';
Radio.Option = Option;

export default Radio;
