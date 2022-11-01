import styled, { css } from 'styled-components';

import RadioGroup from '@components/RadioGroup';

const StyledRadioGroup = styled(RadioGroup)`
  display: flex;
  flex-direction: row;
  width: 355px;
  justify-content: space-between;
  align-items: center;
`;

const CustomRadioButtonStyle = css`
  -webkit-appearance: none;
  appearance: none;
  width: 32px;
  height: 32px;
  margin: 0;
  padding: 6px;
  border: 2px solid #0000007f;
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

const StyledRadioOption = styled(RadioGroup.Option)`
  display: flex;
  align-items: center;

  input[type='radio'] {
    ${CustomRadioButtonStyle}
  }

  label {
    font-size: 17px;
    padding: 10px;
  }
`;

const StyledRadio = {
  Group: StyledRadioGroup,
  Option: StyledRadioOption,
};

export default StyledRadio;
