import { ReactNode } from 'react';

import Field from '@components/Form/Field/Field';
import Radio from '@components/Radio';

type RadioFieldPros = {
  label?: ReactNode;
  name: string;
  defaultValue?: string;
  validates?: (<V>(value: V) => boolean)[];
  options: { value: string; label: ReactNode; disabled?: boolean }[];
};

const RadioField = ({
  name,
  label,
  validates,
  options,
  ...restProps
}: RadioFieldPros) => (
  <Field
    name={name}
    label={label}
    validates={validates}
    render={(subscribe, { value: selectedValue }) => (
      <Radio selectedValue={selectedValue} {...subscribe}>
        {options.map(({ value, label: optionLabel, disabled = false }) => (
          <Radio.Option key={value} value={value} disabled={disabled}>
            {optionLabel}
          </Radio.Option>
        ))}
      </Radio>
    )}
    {...restProps}
  />
);

export default RadioField;
