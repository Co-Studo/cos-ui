import { Text, TextInput } from '@cos-ui/react';
import { ChangeEvent, useEffect, useState } from 'react';

const TextInputPage = () => {
  const [value, setValue] = useState('');
  const [isError, setIsError] = useState(false);

  const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const currentValue = target.value;
    setValue(currentValue);
    setIsError(currentValue.length > 10);
  };

  useEffect(() => {
    console.log(isError);
  }, [isError]);

  return (
    <>
      <Text variant="sectionTitle">TextInput</Text>
      <TextInput
        name="textInputExample"
        onChange={handleOnChange}
        isError={isError}
        required
      />
      <div css={{ padding: '0.5rem' }}>
        <Text variant="articleDescription" sx={{ color: 'danger' }}>
          {value.length === 0
            ? '입력이 필요합니다.'
            : isError && '10자 이내로 입력해주세요.'}
        </Text>
      </div>
    </>
  );
};

export default TextInputPage;
