import {
  ReactNode,
  useContext,
  createContext,
  cloneElement,
  Children,
  isValidElement,
} from 'react';

import type { RadioProps, RadioState } from './Radio.types';

const RadioContext = createContext<RadioState | null>(null);
RadioContext.displayName = 'RadioContext';

export const useRadioContext = () => {
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
const Radio = (props: RadioProps) => {
  const { selectedValue = '', name, children, ...restProps } = props;
  return (
    <RadioContext.Provider value={{ selectedValue }}>
      <div {...restProps}>{passPropsToChildren(children, { name })}</div>
    </RadioContext.Provider>
  );
};

export default Radio;
