# Intersect Listener

`IntersectListener` 컴포넌트는 페이지 가장 하단에 Intersection 을 감지하기 위한 엘리먼트가 존재하며,
그 엘리먼트가 Intersect 되었을 때 `onIntersect` callback 을 실행합니다.

Observer 가 unobserve 되기 위한 조건을 props 에 함께 넣어 사용합니다.

## Props

- `rootMargin` - root 가 가진 여백입니다. `default: 0px 0px 0px 0px`
- `threshold` - observer의 콜백이 실행될 대상 요소의 가시성 퍼센티지입니다. (0~1) `default: 0.0`
- `onIntersect` - 대상 요소가 가시성에 들어왔을 때 실행될 콜백입니다.
- `unobserve` - observer를 해제할지 여부입니다. `default: false`

## Usage

```tsx
const IntersectListenerPage = () => (
  <IntersectListener
    onIntersect={() => {
      setPage((prev) => prev + 1);
    }}
    unobserve={page === 3}
  >
    <Text variant="sectionTitle">Intersect Listener</Text>
    <FlexBox sx={{ width: '1240px', flexWrap: 'wrap', gap: '40px 10px' }}>
      {elements.map((element) => (
        <Card key={element} number={element} />
      ))}
    </FlexBox>
  </IntersectListener>
);
```
