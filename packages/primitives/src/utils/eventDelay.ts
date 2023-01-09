import { useRef } from 'react';

const throttle = (callback: (args) => void, limit = 100) => {
  let waiting = false;

  return (...args) => {
    if (waiting) return;

    callback(args);
    waiting = true;
    setTimeout(() => {
      waiting = false;
    }, limit);
  };
};

const useDebounce = (callback: (...args: unknown[]) => void, limit = 100) => {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  return (...args: unknown[]) => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      callback(...args);
      timer.current = null;
    }, limit);
  };
};

export { throttle, useDebounce };
