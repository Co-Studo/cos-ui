import { memo } from 'react';

import type { ErrorProps } from './Field.types';

const FieldError = memo((props: ErrorProps) => {
  const { inputId, error } = props;
  return (
    <div data-type="error" id={`${inputId}-helper`}>
      {error}
    </div>
  );
});
FieldError.displayName = 'FieldError';

export default FieldError;
