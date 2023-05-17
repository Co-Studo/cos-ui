import { Radio } from '@cos-ui/primitives';
import styled, { css } from 'styled-components';

export const RadioGroupStyle = css`
  display: flex;
  flex-direction: row;
  min-width: fit-content;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

const RadioGroup = styled(Radio)`
  ${RadioGroupStyle}
`;

export default RadioGroup;
