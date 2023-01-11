import { useRef } from 'react';

const useThrottle = (callback: (...args: unknown[]) => void, limit = 100) => {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  return (...args: unknown[]) => {
    if (timer.current) return;

    callback(...args);
    timer.current = setTimeout(() => {
      timer.current = null;
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

export { useThrottle, useDebounce };
