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

/**
 * @name Radio
 * @description 라디오 그룹 컴포넌트의 루트 컴포넌트입니다. 최상위 컴포넌트인 Radio 에 그룹명(name)을 설정하고, 하위 컴포넌트인 Radio.Option 에 각각의 value를 설정하여 사용합니다.
 * @props name - 라디오 그룹명으로 하위 Option 컴포넌트들의 name 으로 설정됩니다.
 * @props selectedValue - 현재 선택 된 라디오 옵션의 value
 * @props onChange - 라디오 버튼 클릭 시 처리할 이벤트 핸들러
 * @example
 * ```tsx
    <Radio
      name="check-out-setting"
      selectedValue={selectedValue}
      onChange={handleOnChange}
    >
      <Radio.Option value="public">공개</Radio.Option>
      <Radio.Option value="private">비공개</Radio.Option>
    </Radio>
 * ```
 */
const Radio = ({
  selectedValue = '',
  name,
  children,
  ...restProps
}: RadioProps) => (
  <RadioContext.Provider value={{ selectedValue }}>
    <div {...restProps}>{passPropsToChildren(children, { name })}</div>
  </RadioContext.Provider>
);

type OptionProps = {
  id?: string;
  name?: string;
  value: string;
  children: ReactNode;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

/**
 * @name Radio.Option
 * @description 라디오 그룹 컴포넌트의 하위 옵션 컴포넌트입니다.
 * @props value - 라디오 버튼의 값
 * @props disabled - 비활성화 여부
 * @props onChange - 라디오 버튼 클릭 시 Option 개별적으로 처리할 이벤트 핸들러
 */
const Option = ({
  id,
  name = '',
  value,
  children,
  disabled,
  onChange,
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
      />
      <label htmlFor={optionId}>{children}</label>
    </div>
  );
};

Radio.Option = Option;

export default Radio;
