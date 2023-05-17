import type { ChangeEvent, FocusEvent } from 'react';

// TODO : Auto Resizing TextArea
export type Resize = 'both' | 'none' | 'horizontal' | 'vertical' | 'auto';

export type TextAreaProps = {
  id?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  cols?: number;
  rows?: number;
  required?: boolean;
  resize?: Resize;
  isError?: boolean;
  isSuccess?: boolean;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void;
};
