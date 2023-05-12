import { Radio } from '../../Radio';
import Field from './Field';
import type { RadioFieldProps } from './Field.types';

/**
 * @name RadioField
 * @description Form 컴포넌트의 하위 Field로 구현된 라디오 그룹 컴포넌트입니다. 반드시 Form 컴포넌트 하위에서 사용해야 합니다.
 * @props name - 라디오 그룹의 이름(required)
 * @props label - 입력 필드의 라벨 값, 단순 텍스트 또는 컴포넌트 입력 가능
 * @props validates - 입력 필드의 검증 함수 배열, 앞에서부터 순차적으로 실행
 * @props options - 라디오 그룹의 옵션 정보(value, label) 객체 배열
 * @example
 * ```tsx
 * <Form.RadioField
      name="personal_information"
      label="개인정보 수집 동의"
      validates={[checkAgree]}
      options={[
        { value: 'agree', label: '동의' },
        { value: 'disagree', label: '비동의' },
      ]}
    />
 * ```
 */
const RadioField = (props: RadioFieldProps) => {
  const { name, label, validates, options, ...restProps } = props;
  return (
    <Field
      name={name}
      label={label}
      validates={validates}
      render={(subscribe, { value: selectedValue }) => (
        <Radio selectedValue={selectedValue} {...subscribe}>
          {options.map(({ value, label: optionLabel, disabled = false }) => (
            <Radio.Option key={value} value={value} disabled={disabled}>
              {optionLabel}
            </Radio.Option>
          ))}
        </Radio>
      )}
      {...restProps}
    />
  );
};

export default RadioField;
