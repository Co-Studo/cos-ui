# Tab

[Demo](https://idyllic-puffpuff-476e23.netlify.app/tab/basic-tab)

목록에 있는 메뉴 중 하나를 선택하면 그에 맞는 컨텐츠가 보여지는 기능을 하는 컴포넌트입니다.

작성한 순서대로 탭과 탭 패널이 짝지어지며, `Tab.Group` 컴포넌트에는 `defaultIndex` prop을 전달하여 기본으로 활성화될 탭을 지정할 수 있습니다.
그리고 탭을 클릭했을 때 컨텐츠를 전환하는 것 이외의 동작을 수행하고 싶다면 `Tab` 컴포넌트의 `onClick` prop을 활용해 수행할 동작을 지정할 수 있습니다.

### Props

```tsx
type TabGroupProps = {
  defaultIndex?: number;
}

type TabProps = {
  onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
}
```

### Usage

```tsx
const TabDemo = () => (
  <Tab.Group defaultIndex={0}>
    <Tab.List>
      <Tab onClick={() => {}}>Tab A</Tab>
      <Tab>Tab B</Tab>
    </Tab.List>
    <Tab.Panels>
      <Tab.Panel>Tab Panel 1</Tab.Panel>
      <Tab.Panel>Tab Panel 2</Tab.Panel>
    </Tab.Panels>
  </Tab.Group>
)
```
