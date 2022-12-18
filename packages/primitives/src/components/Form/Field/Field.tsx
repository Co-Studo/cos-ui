import { memo, ReactNode, useId, useMemo } from 'react';

import useForm from '@hooks/useForm';

type LabelProps = {
  inputId: string;
  label: ReactNode;
  isError: boolean;
};

const Label = memo(({ inputId, label, isError }: LabelProps) => (
  <label data-type="label" data-error={isError} htmlFor={inputId}>
    {label}
  </label>
));

Label.displayName = 'Label';

type ErrorProps = {
  inputId: string;
  error: ReactNode;
};

const Error = memo(({ inputId, error }: ErrorProps) => (
  <div data-type="error" id={`${inputId}-helper`}>
    {error}
  </div>
));

Error.displayName = 'Error';

type RenderProps = {
  id: string;
  name: string;
  defaultValue?: string;
};

type FieldProps = {
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

const Field = ({
  label,
  defaultValue,
  isShowError = true,
  validates,
  name,
  render,
  ...restProps
}: FieldProps) => {
  const { subscribe, value, error } = useForm(name, defaultValue);
  const id = useId();
  const isError = Boolean(error);

  const subscribeProps = useMemo(
    () => ({
      ...subscribe(validates),
      'aria-invalid': isError,
      'aria-labelledby': id,
      'aria-describedby': `${id}-helper`,
    }),
    [isError, id, validates],
  );

  const fieldContents = useMemo(
    () =>
      render({ id, name, defaultValue, ...subscribeProps }, { error, value }),
    [value, error],
  );

  return (
    <div data-type="filed" {...restProps}>
      {label && <Label inputId={id} label={label} isError={isError} />}
      {fieldContents}
      {isShowError && error && <Error inputId={id} error={error} />}
    </div>
  );
};

export default Field;
