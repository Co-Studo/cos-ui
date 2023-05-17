import { Radio } from '@cos-ui/primitives';
import styled, { css } from 'styled-components';

import { typography } from '../../styles/typography';

const RadioButtonStyle = css`
  -webkit-appearance: none;
  appearance: none;
  width: 2rem;
  height: 2rem;
  margin: 0;
  padding: 0.2rem;
  border: 0.2rem solid #0000007f;
  border-radius: 50%;
  background-clip: content-box;

  :checked {
    background-color: #007aff;

    :hover {
      background-color: #007aff;
    }
  }

  :hover {
    background-color: #85c0fe;
  }
`;

export const RadioOptionStyle = css`
  display: flex;
  align-items: center;
  width: 100%;
  min-width: fit-content;

  input[type='radio'] {
    ${RadioButtonStyle}
  }

  label {
    ${typography.sectionDescription};
    padding: 1rem;
  }
`;

const RadioOption = styled(Radio.Option)`
  ${RadioOptionStyle}
`;

export default RadioOption;
