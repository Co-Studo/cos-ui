import { Form } from '@cos-ui/primitives';
import styled from 'styled-components';

import { RadioGroupStyle } from '../Radio/RadioGroup';
import { RadioOptionStyle } from '../Radio/RadioOption';
import { FieldStyle } from './Field';

const RadioField = styled(Form.RadioField)`
  ${FieldStyle}
  & > div {
    ${RadioGroupStyle}
    & > div {
      ${RadioOptionStyle}
    }
  }
`;

export default RadioField;
