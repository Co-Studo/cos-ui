import Field from './Field';
import FormRoot from './Form';
import RadioField from './RadioField';
import TextField from './TextField';

const Form = Object.assign(FormRoot, {
  Field,
  TextField,
  RadioField,
});

export { Form };
