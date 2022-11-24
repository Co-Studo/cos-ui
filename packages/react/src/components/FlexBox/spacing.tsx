export type MarginKey = typeof marginKeys[number];
export type PaddingKey = typeof paddingKeys[number];
export type SpacingValue = typeof spacing[number] | string;

export type Margin = Partial<Record<MarginKey, SpacingValue>>;
export type Padding = Partial<Record<PaddingKey, SpacingValue>>;

export interface SpacingSX extends Margin, Padding {}

const spacing = [0.5, 1, 1.5, 2, 2.5] as const;
const marginKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my'] as const;
const paddingKeys = ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py'] as const;

const properties = {
  m: 'margin',
  p: 'padding',
};

const directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Right', 'Left'],
  y: ['Top', 'Bottom'],
};

export const isSpacingProp = (key) =>
  marginKeys.includes(key) || paddingKeys.includes(key);

export const getSpacingCssProps = (key: string, value: SpacingValue) => {
  if (typeof value !== 'string' && !spacing.includes(value)) return {};

  const [propKey, dirKey] = key.split('');
  const property = properties[propKey];
  const direction = directions?.[dirKey];

  const spacingValue = typeof value === 'string' ? value : `${value}rem`;

  if (Array.isArray(direction)) {
    return direction.reduce(
      (prev, dir) => ({
        ...prev,
        [property + dir]: spacingValue,
      }),
      {},
    );
  }

  return {
    [property + (direction || '')]: spacingValue,
  };
};
