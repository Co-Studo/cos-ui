import { Radio } from '@cos-ui/primitives';
import styled, { css } from 'styled-components';

import { typography } from '@styles/typography';

const StyledRadioGroup = styled(Radio)`
  display: flex;
  flex-direction: row;
  max-width: 355px;
  justify-content: space-between;
  align-items: center;
`;

const CustomRadioButtonStyle = css`
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

const StyledRadioOption = styled(Radio.Option)`
  display: flex;
  align-items: center;

  input[type='radio'] {
    ${CustomRadioButtonStyle}
  }

  label {
    ${typography.sectionDescription};
    padding: 1rem;
  }
`;

const StyledRadio = {
  Group: StyledRadioGroup,
  Option: StyledRadioOption,
};

export default StyledRadio;
