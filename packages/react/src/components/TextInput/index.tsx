import { TextInput } from '@cos-ui/primitives';
import styled, { css } from 'styled-components';

export const TextInputStyle = css`
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

  :invalid {
    border-color: ${({ theme }) => theme.palette.danger};
  }
`;

const StyledTextInput = styled(TextInput)`
  ${TextInputStyle}
`;

export default StyledTextInput;
