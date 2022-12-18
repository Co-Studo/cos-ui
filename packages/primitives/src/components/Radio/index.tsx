import {
  ReactNode,
  useContext,
  createContext,
  ChangeEvent,
  cloneElement,
  Children,
  FocusEvent,
  isValidElement,
  memo,
  useMemo,
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
  const childrenProps = useMemo(
    () => ({
      name,
      onChange,
    }),
    [name, onChange],
  );
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
  isChecked: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  className?: string;
};

const withContext = (Option) =>
  // eslint-disable-next-line func-names
  function ({ value, name, ...restProps }: Omit<OptionProps, 'isChecked'>) {
    const { selectedValue } = useRadioContext();

    const isChecked = useMemo(
      () => selectedValue === value,
      [selectedValue, value],
    );

    return (
      <Option value={value} name={name} isChecked={isChecked} {...restProps} />
    );
  };

const Option = memo(
  ({
    id,
    name = '',
    value,
    children,
    onBlur,
    onChange,
    disabled,
    isChecked,
    ...restProps
  }: OptionProps) => {
    const optionId = id || `option-${name}-${value}`;
    return (
      <div {...restProps}>
        <input
          type="radio"
          id={optionId}
          name={name}
          value={value}
          disabled={disabled}
          defaultChecked={isChecked}
          onChange={onChange}
          onBlur={onBlur}
        />
        <label htmlFor={id}>{children}</label>
      </div>
    );
  },
);

Option.displayName = 'Option';

Radio.Option = withContext(Option);

export default Radio;
