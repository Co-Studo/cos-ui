import { memo } from 'react';

import type { LabelProps } from './Field.types';

const FieldLabel = memo((props: LabelProps) => {
  const { inputId, label, isError } = props;
  return (
    <label data-type="label" data-error={isError} htmlFor={inputId}>
      {label}
    </label>
  );
});
FieldLabel.displayName = 'FieldLabel';

export default FieldLabel;
