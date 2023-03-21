import { SizeSX } from '@styles/size';

type SpacingProps = {
  size?: string;
  sx?: SizeSX;
};

const Spacing = (props: SpacingProps) => {
  const { size = '1rem', sx } = props;
  return (
    <div
      css={{
        width: size,
        height: size,
        ...sx,
      }}
    />
  );
};

export default Spacing;
