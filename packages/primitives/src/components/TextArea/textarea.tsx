import { useId } from 'react';

import { TextAreaProps } from './textarea.types';

/**
 *
 * @name TextArea
 * @description 여러 줄의 텍스트를 입력하고 검증 상태(isError, isSuccess)를 나타낼 수 있는 컴포넌트입니다.
 * @props cols, rows - 가로 세로 크기 또는 글자 수 제한
 * @props resize - none | horizontal | vertical | both
 * @props isError - 입력 값 검증 실패 여부
 * @props isSuccess - 입력 값 검증 성공 여부
 * @example
 * ```tsx
 * <TextArea
      name="textAreaExample"
      resize="vertical"
      cols={30}
      rows={30}
      onChange={handleOnChange}
    />
 * ```
 */

const TextArea = (props: TextAreaProps) => {
  const { id, isError, ...restProps } = props;
  const randomId = useId();
  const textAreaId = id ?? randomId;
  return (
    <textarea
      data-type="textarea"
      id={textAreaId}
      data-error={isError}
      {...restProps}
    />
  );
};

export default TextArea;
