import { Resize, TextArea } from '@cos-ui/primitives';
import styled, { css } from 'styled-components';

export const TextAreaStyle = css<{ resize?: Resize }>`
  width: 100%;
  min-height: 15rem;
  resize: ${({ resize = 'vertical' }) => resize};
  border: 0.1rem solid ${({ theme }) => theme.palette.neutral_1};
  border-radius: 1rem;
  padding: 1rem;
  font-size: 1.3rem;
  background: ${({ theme }) => theme.palette.white};

  &[data-error='true'] {
    border-color: ${({ theme }) => theme.palette.danger};
  }

  :invalid {
    border-color: ${({ theme }) => theme.palette.danger};
  }
`;

const StyledTextArea = styled(TextArea)`
  ${TextAreaStyle}
`;

export default StyledTextArea;
