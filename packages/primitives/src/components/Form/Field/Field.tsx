import { useId, useMemo } from 'react';

import useForm from '../useForm';
import type { FieldProps } from './Field.types';
import FieldError from './FieldError';
import FieldLabel from './FieldLabel';

/**
 * @name Field
 * @description Form 컴포넌트의 하위 Field를 render props 방식으로 구현할 수 있는 컴포넌트입니다. 반드시 Form 컴포넌트 하위에서 사용해야 합니다.
 * @props name(required) - 입력 필드의 이름이자 key 값
 * @props label - 입력 필드의 라벨 값, 단순 텍스트 또는 컴포넌트 입력 가능
 * @props isShowError - Error 메세지의 출력 여부, default true
 * @props validates - 입력 필드의 검증 함수 배열, 앞에서부터 순차적으로 실행
 * @props render - 실질적인 input 컴포넌트를 생성하는 render 함수로 인자로 subscribe, result 를 받습니다.
 * @example
 * ```tsx
    <Form.Field
    name="study_name"
    label="스터디 이름"
    validates={[checkRequired, checkTitle]}
    render={(subscribe, { error }) => (
      <TextInput
        isError={Boolean(error)}
        placeholder="8자 이내로 스터디 이름을 입력해주세요."
        {...subscribe}
      />
    )}
  />
 * ```
 */
const Field = (props: FieldProps) => {
  const {
    label,
    defaultValue,
    isShowError = true,
    validates,
    name,
    render,
    ...restProps
  } = props;
  const { subscribe, value, error } = useForm(name, defaultValue);
  const id = useId();
  const isError = Boolean(error);

  const subscribeProps = useMemo(
    () => ({
      ...subscribe(validates),
      'aria-invalid': isError,
      'aria-labelledby': id,
      'aria-describedby': `${id}-helper`,
    }),
    [isError, id, validates],
  );

  const fieldContents = useMemo(
    () =>
      render({ id, name, defaultValue, ...subscribeProps }, { error, value }),
    [value, error],
  );

  return (
    <div data-type="field" {...restProps}>
      {label && <FieldLabel inputId={id} label={label} isError={isError} />}
      {fieldContents}
      {isShowError && error && <FieldError inputId={id} error={error} />}
    </div>
  );
};

export default Field;
