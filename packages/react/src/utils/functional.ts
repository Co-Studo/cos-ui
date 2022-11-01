const go = (value, ...funcs) => funcs.reduce((res, func) => func(res), value);

const pipe =
  (...funcs) =>
  (value) =>
    go(value, ...funcs);

const all =
  <V>(...funcs: ((value: V) => boolean)[]) =>
  (value: V) =>
    funcs.every((func) => func(value));

export { go, pipe, all };
