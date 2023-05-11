import Field from './Field/Field';
import RadioField from './Field/RadioField';
import TextField from './Field/TextField';
import FormRoot from './Form';

const Form = Object.assign(FormRoot, {
  Field,
  TextField,
  RadioField,
});

export default Form;
