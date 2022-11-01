import styled from 'styled-components';

import TextField from '@components/TextField';

const StyledTextFieldRoot = styled(TextField)`
  display: flex;
  flex-direction: column;
  width: 580px;
  gap: 12px;
`;

const StyledInput = styled(TextField.Input)`
  width: 580px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.palette.borderLine};
  border-radius: 10px;
  padding: 0 10px;
  font-size: 1rem;
  :focus {
    border-color: ${({ theme }) => theme.palette.primary};
  }

  &[data-error='true'] {
    border-color: ${({ theme }) => theme.palette.warning};
  }
`;

const StyledLabel = styled(TextField.Label)`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.primary};
`;

const StyledHelperText = styled(TextField.HelperText)`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.palette.warning};
`;

const StyledTextField = Object.assign(StyledTextFieldRoot, {
  Input: StyledInput,
  Label: StyledLabel,
  HelperText: StyledHelperText,
});

export default StyledTextField;
