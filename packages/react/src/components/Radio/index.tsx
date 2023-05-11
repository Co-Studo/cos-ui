import { Radio } from '@cos-ui/primitives';
import styled, { css } from 'styled-components';

import { typography } from '../../styles/typography';

export const RadioGroupStyle = css`
  display: flex;
  flex-direction: row;
  min-width: fit-content;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

const StyledRadioGroup = styled(Radio)`
  ${RadioGroupStyle}
`;

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

const StyledRadioOption = styled(Radio.Option)`
  ${RadioOptionStyle}
`;

const StyledRadio = {
  Group: StyledRadioGroup,
  Option: StyledRadioOption,
};

export default StyledRadio;
