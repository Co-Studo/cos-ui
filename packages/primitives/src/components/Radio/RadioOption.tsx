import { useRadioContext } from './radio';
import type { RadioOptionProps } from './Radio.types';

/**
 * @name RadioOption
 * @description 라디오 그룹 컴포넌트의 하위 옵션 컴포넌트입니다.
 * @props value - 라디오 버튼의 값
 * @props disabled - 비활성화 여부
 * @props onChange - 라디오 버튼 클릭 시 Option 개별적으로 처리할 이벤트 핸들러
 */
const RadioOption = ({
  id,
  name = '',
  value,
  children,
  disabled,
  onChange,
  ...restProps
}: RadioOptionProps) => {
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

export default RadioOption;
