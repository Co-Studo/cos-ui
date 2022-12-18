import { Form } from '@cos-ui/primitives';
import styled, { css } from 'styled-components';

import { RadioGroupStyle, RadioOptionStyle } from '@components/Radio';
import { TextAreaStyle } from '@components/TextArea';
import { TextInputStyle } from '@components/TextInput';

const StyledFormRoot = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 58rem;
  gap: 1.2rem;
`;

const LabelStyle = css`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.primary};
`;

const ErrorMsgStyle = css`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.palette.danger};
`;

const FieldStyle = css`
  display: flex;
  gap: 1rem;
  flex-direction: column;

  & > [data-type='label'] {
    ${LabelStyle}
  }

  & > [data-type='error'] {
    ${ErrorMsgStyle}
  }
`;

const Field = styled(Form.Field)`
  ${FieldStyle}
`;

const TextField = styled(Form.TextField)`
  ${FieldStyle}

  & > input {
    ${TextInputStyle}
  }

  & > textarea {
    ${TextAreaStyle}
  }
`;

const RadioField = styled(Form.RadioField)`
  ${FieldStyle}
  & > div {
    ${RadioGroupStyle}
    & > div {
      ${RadioOptionStyle}
    }
  }
`;

const StyledFrom = Object.assign(StyledFormRoot, {
  Field,
  TextField,
  RadioField,
});

export default StyledFrom;
