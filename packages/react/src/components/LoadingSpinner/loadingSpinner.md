# Loading Spinner

[Demo](https://idyllic-puffpuff-476e23.netlify.app/loading-spinner/loading-spinner)

페이지가 로딩 중임을 나타낼 수 있는 컴포넌트입니다.

`size` prop을 통해 크기 조절이 가능합니다.

### Props

```tsx
type LoadingSpinnerProps = {
  size?: 'small' | 'medium' | 'large';
};

const defaultLoadingSpinnerProps = {
  size: 'medium'
};
```

### Usage

```tsx
const LoadingSpinnerDemo = () => (
  <div css={{ position: 'relative', width: '20rem', height: '15rem' }}>
    <LoadingSpinner size="large" />
  </div>
);
```
