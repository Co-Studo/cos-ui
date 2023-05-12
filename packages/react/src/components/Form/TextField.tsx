import { Form } from '@cos-ui/primitives';
import styled from 'styled-components';

import { TextAreaStyle } from '../TextArea';
import { TextInputStyle } from '../TextInput/TextInput';
import { FieldStyle } from './Field';

const TextField = styled(Form.TextField)`
  ${FieldStyle}

  & > input {
    ${TextInputStyle}
  }

  & > textarea {
    ${TextAreaStyle}
  }
`;

export default TextField;
