import { TextField } from '@cos-ui/react';
import { useState } from 'react';

const TextFieldPage = () => {
  const [errorMsg, setErrorMsg] = useState('');

  const handleOnBlur = (e) => {
    console.log('blur :', e.target.value);
  };

  const handleValidation = ({
    isError,
    isPass,
  }: {
    isError?: boolean;
    isPass?: boolean;
  }) => {
    if (isError) {
      setErrorMsg('5 ~ 8 자 이내로 입력해주세요!');
    }
    if (isPass) {
      setErrorMsg('');
    }
  };

  const checkMaxLength = (value: string) => value?.length <= 8;

  return (
    <TextField name="id">
      <TextField.Label>ID</TextField.Label>
      <TextField.Input
        type="text"
        onBlur={handleOnBlur}
        validate={checkMaxLength}
        onValidate={handleValidation}
        minLength={5}
      />
      <TextField.HelperText>{errorMsg}</TextField.HelperText>
    </TextField>
  );
};

export default TextFieldPage;
