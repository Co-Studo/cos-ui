export type MarginKey = typeof marginKeys[number];
export type PaddingKey = typeof paddingKeys[number];
export type SpacingValue = number | string;

export type Margin = Partial<Record<MarginKey, SpacingValue>>;
export type Padding = Partial<Record<PaddingKey, SpacingValue>>;

export interface SpacingSX extends Margin, Padding {}

const SPACING_VALUE_PER_UNIT = 0.2;
const SPACING_UNIT = 'rem';

const spacing = (value: number) =>
  `${value * SPACING_VALUE_PER_UNIT}${SPACING_UNIT}`;

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

export const getSpacingValue = (value: SpacingValue) =>
  typeof value === 'string' ? value : spacing(value);

export const getSpacingCssProps = (key: string, value: SpacingValue) => {
  const [propKey, directionKey] = key.split('');
  const property = properties[propKey];
  const direction = directions?.[directionKey];

  const spacingValue = getSpacingValue(value);

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
