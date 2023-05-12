import { PropsWithChildren } from 'react';

export type IntersectListenerProps = PropsWithChildren & {
  onIntersect: (target?: HTMLElement) => void;
  unobserve: boolean;
  rootMargin?: string;
  threshold?: number;
};
