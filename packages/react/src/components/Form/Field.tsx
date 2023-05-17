import { Form } from '@cos-ui/primitives';
import styled, { css } from 'styled-components';

const LabelStyle = css`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.primary};
`;

const ErrorMsgStyle = css`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.palette.danger};
`;

export const FieldStyle = css`
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

export default Field;
