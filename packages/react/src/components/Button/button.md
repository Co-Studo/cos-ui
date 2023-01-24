# Button

[Demo](https://idyllic-puffpuff-476e23.netlify.app/button/button)

프로젝트에서 사용되는 버튼을 정의한 컴포넌트입니다.

버튼의 색상, 모양, 크기, 형태를 변경할 수 있으며 기본적으로 버튼이 가지는 속성들도 지정이 가능합니다.

### Props

```tsx
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit';
  color?: 'primary' | 'danger' | 'neutral' | 'black';
  shape?: 'round' | 'rect';
  size?: 'small' | 'medium' | 'large';
  variant?: 'contained' | 'outlined';
}

const defaultButtonProps = {
  type: 'button',
  color: 'primary',
  shape: 'rect',
  size: 'medium',
  variant: 'contained'
};
```

### Usage

```tsx
const ButtonDemo = () => (
  <Button color="neutral" variant="outlined" shape="round" size="large">
    Button
  </Button>
);
```
