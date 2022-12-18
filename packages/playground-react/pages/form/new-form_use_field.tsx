import {
  Button,
  FlexBox,
  Form,
  Radio,
  TextArea,
  TextInput,
} from '@cos-ui/react';

const checkTitle = (value) => {
  if (value.length > 8) {
    throw Error(`스터디 이름은 8자 이하로 작성해주세요!`);
  }
  return true;
};

const checkMinCount = (value) => {
  const ok = value >= 3;
  if (!ok) throw Error(`스터디 최소 인원은 3명입니다.`);
  return ok;
};

const checkMaxCount = (value) => {
  const ok = value <= 10;
  if (!ok) throw Error('스터디 최대 인원은 10명입니다.');
  return ok;
};

const checkRequired = (value) => {
  const ok = value.length > 0;
  if (!ok) throw Error('필수 입력 정보입니다!');
  return ok;
};

const checkAgree = (value) => {
  const ok = value === 'agree';
  if (!ok) throw Error('개인정보 수집에 동의해주세요.');
  return ok;
};

const handleSubmit = (e, value) => {
  console.log(value);
};

const ChangeFormPage = () => (
  <Form onSubmit={handleSubmit} validationMode="onChange">
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
    <Form.Field
      name="max_people"
      label="최대 인원"
      defaultValue="3"
      validates={[checkRequired, checkMinCount, checkMaxCount]}
      render={(subscribe, { error }) => (
        <TextInput
          type="number"
          isError={Boolean(error)}
          placeholder="스터디 최소 인원은 3명, 최대 인원은 10명입니다."
          {...subscribe}
        />
      )}
    />
    <Form.Field
      name="description"
      label="스터디 소개"
      validates={[checkRequired]}
      render={(subscribe, { error }) => (
        <TextArea
          isError={Boolean(error)}
          placeholder="스터디 소개를 작성해주세요."
          {...subscribe}
        />
      )}
    />
    <Form.Field
      name="personal_information"
      label="개인정보 수집 동의"
      validates={[checkAgree]}
      render={({ name, ...subscribe }, { value }) => (
        <Radio.Group name={name} selectedValue={value} {...subscribe}>
          <Radio.Option value="agree">동의</Radio.Option>
          <Radio.Option value="disagree">비동의</Radio.Option>
        </Radio.Group>
      )}
    />
    <FlexBox sx={{ justifyContent: 'center' }}>
      <Button type="submit" size="medium">
        제출
      </Button>
    </FlexBox>
  </Form>
);

export default ChangeFormPage;
