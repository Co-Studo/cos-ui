import { TextArea } from '../../TextArea';
import { TextInput } from '../../TextInput';
import Field from './Field';
import { TextFieldProps } from './Field.types';

/**
 * @name TextField
 * @description Form 컴포넌트의 하위 Field로 구현된 TextField 컴포넌트입니다. 반드시 Form 컴포넌트 하위에서 사용해야 합니다. multiline type으로 설정 시 TextArea로 사용 가능합니다.
 * @props name - 입력 필드 이름(required)
 * @props type - text(default) | email | number | password | search | tel | date | url | multiline
 * @props resize - none | horizontal | vertical | both
 * @props label - 입력 필드의 라벨 값, 단순 텍스트 또는 컴포넌트 입력 가능
 * @props validates - 입력 필드의 검증 함수 배열, 앞에서부터 순차적으로 실행
 * @example
 * ```tsx
 * <Form.TextField
    type="number"
    name="max_people"
    label="최대 인원"
    defaultValue="3"
    validates={[checkRequired, checkMinCount, checkMaxCount]}
    placeholder="스터디 최소 인원은 3명, 최대 인원은 10명입니다."
  />
  <Form.TextField
    type="multiline"
    name="description"
    label="스터디 소개"
    validates={[checkRequired]}
    placeholder="스터디 소개를 작성해주세요."
  />
 * ```
 */
const TextField = (props: TextFieldProps) => {
  const {
    name,
    label,
    type,
    defaultValue,
    validates,
    className,
    ...restProps
  } = props;

  return (
    <Field
      className={className}
      name={name}
      label={label}
      defaultValue={defaultValue}
      validates={validates}
      render={(subscribe, { error }) =>
        type === 'multiline' ? (
          <TextArea isError={Boolean(error)} {...restProps} {...subscribe} />
        ) : (
          <TextInput
            type={type}
            isError={Boolean(error)}
            {...restProps}
            {...subscribe}
          />
        )
      }
    />
  );
};

export default TextField;
