import { createContext, useContext, useState } from 'react';

import type { FormContextType, FormProps } from './Form.types';

export const FormContext = createContext<FormContextType | null>(null);
FormContext.displayName = 'FormContext';

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error(
      'useFormContext should be used within FormContext.Provider',
    );
  }
  return context;
};

/**
 * @name Form
 * @description 하위 input 컴포넌트들의 입력값과 검증 상태를 관리하는 Form 컴포넌트입니다.
 * @props validationMode - Input Field 들의 입력값 업데이트와 검증을 어떤 이벤트를 통해 트리거 할지 결정합니다. (onChange | onBlur | onSubmit)
 * @props onSubmit - form 의 onSubmit 이벤트의 handler 를 설정합니다. 두번째 매개변수인 values 를 통해 하위 Input 필드들의 입력값을 받아 처리 할 수 있습니다.
 * @example
 * ```tsx
 *  <Form onSubmit={handleSubmit} validationMode="onChange">
    <Form.TextField
      name="study_name"
      label="스터디 이름"
      validates={[checkRequired, checkTitle]}
      placeholder="8자 이내로 스터디 이름을 입력해주세요."
    />
    <Form.RadioField
      name="personal_information"
      label="개인정보 수집 동의"
      validates={[checkAgree]}
      options={[
        { value: 'agree', label: '동의' },
        { value: 'disagree', label: '비동의' },
      ]}
    />
    <FlexBox sx={{ justifyContent: 'center' }}>
      <Button type="submit" size="medium">
        제출
      </Button>
    </FlexBox>
  </Form>
 * ```
 */
const Form = (props: FormProps) => {
  const { validationMode, children, onSubmit, ...restProps } = props;
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSubmit) onSubmit(event, values);
  };

  return (
    <FormContext.Provider
      value={{ values, setValues, errors, setErrors, validationMode }}
    >
      <form onSubmit={handleSubmit} {...restProps}>
        {children}
      </form>
    </FormContext.Provider>
  );
};

export default Form;
