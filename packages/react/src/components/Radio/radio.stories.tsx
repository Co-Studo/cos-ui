import { useState } from 'react';

import StyledRadio from '@components/Radio';

export default {
  title: 'React/Radio',
  component: StyledRadio,
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
    <StyledRadio.Group
      name="FirstGroup"
      selectedValue={selectedValue}
      onChange={handleOnChange}
    >
      {dataList.map(({ value, label }) => (
        <StyledRadio.Option key={value} value={value}>
          {label}
        </StyledRadio.Option>
      ))}
    </StyledRadio.Group>
  );
};
