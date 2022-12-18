import { ChangeEvent, FocusEvent, useId } from 'react';

export type Resize = 'both' | 'none' | 'horizontal' | 'vertical' | 'auto';

export type TextAreaProps = {
  id?: string;
  name?: string;
  isError?: boolean;
  defaultValue?: string;
  placeholder?: string;
  cols?: number;
  rows?: number;
  required?: boolean;
  resize?: Resize;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void;
};

const TextArea = ({ id, isError, ...restProps }: TextAreaProps) => {
  const randomId = useId();
  const textAreaId = id ?? randomId;
  return (
    <textarea
      data-type="textarea"
      id={textAreaId}
      data-error={isError}
      {...restProps}
    />
  );
};

export default TextArea;
