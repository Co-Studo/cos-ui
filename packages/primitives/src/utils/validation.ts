import { all } from '@utils/functional';

const isInteger = (number: number) => {
  const stringNumber = number.toString();
  const ok = number === parseInt(stringNumber, 10);

  if (!ok) throw new Error(`${number} is not integer.`);

  return ok;
};

const isNaturalNumber = (number: number) => {
  const ok = isInteger(number) && number > 0;

  if (!ok) throw new Error(`${number} is not natural number.`);

  return ok;
};

type ValidationFunction<V> = (value: V) => boolean;

const validate = <V>(value: V, ...funcs: ValidationFunction<V>[]) => {
  try {
    const ok = all(...funcs)(value);

    return { ok };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);

    return {
      ok: false,
      message,
    };
  }
};

export { isInteger, isNaturalNumber, validate };
