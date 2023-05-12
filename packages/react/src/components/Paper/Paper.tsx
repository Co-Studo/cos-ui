import BasePaper from './BasePaper';
import FlexPaper from './FlexPaper';
import { PaperProps, isBasePaperProp } from './Paper.types';

/**
 *
 * @name Paper
 * @description `border-radius` 와 `box-shadow` 를 가진 Container 컴포넌트입니다.
 * @props sx - `Paper` 의 스타일을 정의하는 객체입니다. `FlexBox` 의 `sx` 를 사용하면 `FlexBox` 가 적용됩니다.
 * @props onClick - `onClick` 이벤트를 받으면 Clickable CSS가 적용됩니다.
 * @example
 * ```tsx
 *   <Paper
 *     onClick={() => {...}}
 *     sx={{
 *       borderRadius: '1rem',
 *       gap: 2,
 *     }}
 *   >
 *     <Text>Clickable Paper</Text>
 *     <Text>Clickable Paper</Text>
 *     <Text>Clickable Paper</Text>
 *   </Paper>
 * ```
 */
const Paper = (props: PaperProps) => {
  const { sx = {} } = props;

  const isFlex = Object.keys(sx).some((key) => !isBasePaperProp(key));

  return isFlex ? <FlexPaper {...props} /> : <BasePaper {...props} />;
};

export default Paper;
