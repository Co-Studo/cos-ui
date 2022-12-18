import Field from '@components/Form/Field';
import RadioField from '@components/Form/Field/RadioField';
import TextField from '@components/Form/Field/TextField';
import FormRoot from '@components/Form/Form';

const Form = Object.assign(FormRoot, {
  TextField,
  Field,
  RadioField,
});

export default Form;
