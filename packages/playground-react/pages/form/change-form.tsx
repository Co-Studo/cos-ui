import { Form } from '@cos-ui/react';

const checkTitle = (value) => {
  if (!value || value.length <= 0) {
    throw Error(`필수 입력 정보입니다!`);
  }

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

const handleSubmit = (e, value) => {
  console.log(value);
};

const ChangeForm = () => (
  <Form onSubmit={handleSubmit} validationMode="onChange">
    <Form.TextField
      label="스터디 이름"
      name="title"
      type="text"
      placeholder="8자 이내로 스터디 이름을 입력해주세요"
      validates={[checkTitle]}
    />
    <Form.TextField
      label="최대 인원"
      name="max_people"
      type="number"
      placeholder="스터디 최소 인원은 3명, 최대 인원은 10명입니다."
      validates={[checkMinCount, checkMaxCount]}
    />
    <button type="submit">제출</button>
  </Form>
);

export default ChangeForm;
