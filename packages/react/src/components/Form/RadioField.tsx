import { Form } from '@cos-ui/primitives';
import styled from 'styled-components';

import { RadioGroupStyle, RadioOptionStyle } from '../Radio';
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
