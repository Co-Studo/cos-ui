import { Field, RadioField, TextField } from './Field';
import FormRoot, { useFormContext } from './Form';

const Form = Object.assign(FormRoot, {
  Field,
  TextField,
  RadioField,
});

export { Form, useFormContext };
export * from './Form.types';
