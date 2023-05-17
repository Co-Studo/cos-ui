import { ReactNode } from 'react';

import type { Resize } from '../../TextArea';
import type { TextInputTypes } from '../../TextInput';

export type LabelProps = {
  inputId: string;
  label: ReactNode;
  isError: boolean;
};

export type ErrorProps = {
  inputId: string;
  error: ReactNode;
};

export type RenderProps = {
  id: string;
  name: string;
  defaultValue?: string;
};

export type FieldProps = {
  className?: string;
  label?: ReactNode;
  name: string;
  defaultValue?: string;
  isShowError?: boolean;
  validates?: (<V>(value: V) => boolean)[];
  render: (
    subscribe: RenderProps,
    result: { error: string; value: string },
  ) => ReactNode;
};

export type RadioFieldProps = {
  label?: ReactNode;
  name: string;
  defaultValue?: string;
  validates?: (<V>(value: V) => boolean)[];
  options: { value: string; label: ReactNode; disabled?: boolean }[];
};

export type TextFieldProps = {
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
