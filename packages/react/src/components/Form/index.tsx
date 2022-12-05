import { Form } from '@cos-ui/primitives';
import styled, { css } from 'styled-components';

const StyledFormRoot = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 58rem;
  gap: 1.2rem;
`;

const InputStyle = css`
  width: 58rem;
  height: 5rem;
  border: 0.1rem solid ${({ theme }) => theme.palette.neutral_1_light};
  border-radius: 1rem;
  padding: 0 1rem;
  font-size: 1.3rem;
  :focus {
    border-color: ${({ theme }) => theme.palette.primary};
  }

  &[data-error='true'] {
    border-color: ${({ theme }) => theme.palette.danger};
  }
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

const TextField = styled(Form.TextField)`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  input {
    ${InputStyle}
  }
  label {
    ${LabelStyle}
  }
  span {
    ${ErrorMsgStyle}
  }
`;

const StyledFrom = Object.assign(StyledFormRoot, {
  TextField,
});

export default StyledFrom;
