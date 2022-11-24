import { Radio } from '@cos-ui/react';
import { useState } from 'react';

const RadioPage = () => {
  const [selectedValue, setValue] = useState('Value A');

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const dataList = [
    { value: 'Value A', label: 'Value A' },
    { value: 'Value B', label: 'Value B' },
    { value: 'Value C', label: 'Value C' },
  ];

  return (
    <Radio.Group
      name="FirstGroup"
      selectedValue={selectedValue}
      onChange={handleOnChange}
    >
      {dataList.map(({ value, label }) => (
        <Radio.Option key={value} value={value}>
          {label}
        </Radio.Option>
      ))}
    </Radio.Group>
  );
};

export default RadioPage;
