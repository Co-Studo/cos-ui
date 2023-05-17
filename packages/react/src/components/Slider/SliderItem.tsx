import { Slider } from '@cos-ui/primitives';
import styled from 'styled-components';

const SliderItem = styled(Slider.Item)`
  padding: 2.6rem 2.2rem 2rem;
  border-radius: 2rem;
  background: ${({ theme }) => theme.palette.white};
  box-shadow: 0.3rem 0.3rem 0.6rem ${({ theme }) => theme.palette.shadow_100};
`;

export default SliderItem;
