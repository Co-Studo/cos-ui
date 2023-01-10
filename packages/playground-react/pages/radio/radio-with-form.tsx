import { Button, FlexBox, Form, Radio, Text } from '@cos-ui/react';
import { useState } from 'react';

export const FormRadioPage = () => {
  const [formValues, setValues] = useState({});
  const handleSubmit = (e, value) => {
    setValues(value);
  };

  return (
    <FlexBox
      sx={{
        flexDirection: 'column',
        width: '100%',
        gap: 5,
      }}
    >
      <Form onSubmit={handleSubmit} validationMode="onBlur">
        <FlexBox
          sx={{
            flexDirection: 'column',
            width: '100%',
            gap: 5,
          }}
        >
          <Text
            variant="articleTitle"
            sx={{
              color: 'primary',
            }}
          >
            체크아웃
          </Text>
          <Text variant="sectionDescription">설정 여부</Text>
          <Radio.Group name="check-out-setting" selectedValue="public">
            <Radio.Option value="public">공개</Radio.Option>
            <Radio.Option value="private">비공개</Radio.Option>
          </Radio.Group>
          <Text variant="sectionDescription">인증 제출 여부</Text>
          <Radio.Group name="check-out-submission" selectedValue="public">
            <Radio.Option value="public">제출</Radio.Option>
            <Radio.Option value="private">미제출</Radio.Option>
          </Radio.Group>
        </FlexBox>
        <Button type="submit" size="medium">
          스터디 생성
        </Button>
      </Form>
      <FlexBox sx={{ flexDirection: 'column', gap: 5 }}>
        {Object.keys(formValues).map((key) => (
          <Text key={key}>{`${key} : ${formValues[key]}`}</Text>
        ))}
      </FlexBox>
    </FlexBox>
  );
};

export default FormRadioPage;
