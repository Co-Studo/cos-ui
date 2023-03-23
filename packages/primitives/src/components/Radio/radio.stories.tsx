import { useState } from 'react';

import Radio from '@components/Radio';

export default {
  title: 'Primitives/Radio',
  component: Radio,
};

export const Default = () => {
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
    <Radio
      name="FirstGroup"
      selectedValue={selectedValue}
      onChange={handleOnChange}
    >
      {dataList.map(({ value, label }) => (
        <Radio.Option key={value} value={value}>
          {label}
        </Radio.Option>
      ))}
    </Radio>
  );
};
