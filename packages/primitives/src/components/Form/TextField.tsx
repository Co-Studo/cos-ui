import { ReactNode } from 'react';

import Field from '@components/Form/Field';
import TextArea, { Resize } from '@components/TextArea';
import TextInput, { TextInputTypes } from '@components/TextInput';

type TextFieldProps = {
  validates?: (<V>(value: V) => boolean)[];
  type?: TextInputTypes | 'multiline';
  resize?: Resize;
  name: string;
  label?: ReactNode;
  defaultValue?: string;
  placeholder?: string;
  cols?: number;
  rows?: number;
  required?: boolean;
  min?: string;
  max?: string;
  pattern?: string;
  className?: string;
};

const TextField = (props: TextFieldProps) => {
  const {
    name,
    label,
    type,
    defaultValue,
    validates,
    className,
    ...restProps
  } = props;

  return (
    <Field
      className={className}
      name={name}
      label={label}
      defaultValue={defaultValue}
      validates={validates}
      render={(subscribe, { error }) =>
        type === 'multiline' ? (
          <TextArea isError={Boolean(error)} {...restProps} {...subscribe} />
        ) : (
          <TextInput
            type={type}
            isError={Boolean(error)}
            {...restProps}
            {...subscribe}
          />
        )
      }
    />
  );
};

export default TextField;
