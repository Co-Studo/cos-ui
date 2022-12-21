import { ReactNode, useCallback, useEffect, useRef } from 'react';

type IntersectListenerProps = {
  children: ReactNode;
  onIntersect: (target?: HTMLElement) => void;
  unobserve: boolean;
  rootMargin?: string;
  threshold?: number;
};

/**
 *
 * @name IntersectListener
 * @description scroll 이벤트를 사용하지 않고, IntersectionObserver를 사용하여 대상 요소의 가시성을 감지합니다.
 * @props rootMargin - root 가 가진 여백입니다. `default: 0px 0px 0px 0px`
 * @props threshold - observer의 콜백이 실행될 대상 요소의 가시성 퍼센티지입니다. (0~1) `default: 0.0`
 * @props onIntersect - 대상 요소가 가시성에 들어왔을 때 실행될 콜백입니다.
 * @props unobserve - observer를 해제할지 여부입니다. `default: false`
 * @example
 * ```tsx
 *   <IntersectListener
 *     onIntersect={() => setPage((prev) => prev + 1)}
 *     unobserve={page === 3}
 *   >
 *     <FlexBox sx={{ width: '1240px', flexWrap: 'wrap', gap: '40px 10px' }}>
 *       {elements.map((element) => (
 *         <Card key={element} number={element} />
 *       ))}
 *     </FlexBox>
 *   </IntersectListener>
 * ```
 */
const IntersectListener = (props: IntersectListenerProps) => {
  const {
    children,
    onIntersect,
    unobserve = false,
    rootMargin = '0px 0px 0px 0px',
    threshold = 0,
  } = props;
  const ref = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver>();

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        onIntersect(entry.target as HTMLElement);
      }
    },
    [onIntersect],
  );

  useEffect(() => {
    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin,
      threshold,
    });
  }, []);

  useEffect(() => {
    if (ref.current && !unobserve && observer.current) {
      observer.current.observe(ref.current);
    } else if (ref.current && unobserve && observer.current) {
      observer.current.unobserve(ref.current);
    }
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [unobserve, observer]);

  return (
    <div>
      {children}
      <div ref={ref} />
    </div>
  );
};

export default IntersectListener;
