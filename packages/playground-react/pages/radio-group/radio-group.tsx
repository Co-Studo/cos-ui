import { RadioGroup } from '@cos-ui/react';
import { useState } from 'react';

const RadioGroupPage = () => {
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
    <RadioGroup.Group
      name="FirstGroup"
      selectedValue={selectedValue}
      onChange={handleOnChange}
    >
      {dataList.map(({ value, label }) => (
        <RadioGroup.Option key={value} value={value}>
          {label}
        </RadioGroup.Option>
      ))}
    </RadioGroup.Group>
  );
}

export default RadioGroupPage;
