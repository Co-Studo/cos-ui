# Tab

[Demo - Basic Tab](https://idyllic-puffpuff-476e23.netlify.app/tab/basic-tab)

[Demo - Border Tab](https://idyllic-puffpuff-476e23.netlify.app/tab/border-tab)

목록에 있는 메뉴 중 하나를 선택하면 그에 맞는 컨텐츠가 보여지는 기능을 하는 컴포넌트입니다. 총 두가지 형태의 탭이 제공됩니다.

작성한 순서대로 탭과 탭 패널이 짝지어지며, `BasicTab.Group`, `BorderTab.Group` 컴포넌트에는 `defaultIndex` prop을 전달하여 기본으로 활성화될 탭을 지정할 수 있습니다.
그리고 탭을 클릭했을 때 컨텐츠를 전환하는 것 이외의 동작을 수행하고 싶다면 `BasicTab`, `BorderTab` 컴포넌트의 `onClick` prop을 활용해 수행할 동작을 지정할 수 있습니다.

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
const BasicTabDemo = () => (
  <BasicTab.Group>
    <BasicTab.List>
      <BasicTab>Tab A</BasicTab>
      <BasicTab>Tab B</BasicTab>
    </BasicTab.List>
    <BasicTab.Panels>
      <BasicTab.Panel>Tab Panel 1</BasicTab.Panel>
      <BasicTab.Panel>Tab Panel 2</BasicTab.Panel>
    </BasicTab.Panels>
  </BasicTab.Group>
);

const BorderTabDemo = () => (
  <BorderTab.Group>
    <BorderTab.List>
      <BorderTab>
        Tab A
        <BorderTab.ActiveBar />
      </BorderTab>
      <BorderTab>
        Tab B
        <BorderTab.ActiveBar />
      </BorderTab>
    </BorderTab.List>
    <BorderTab.Panels>
      <BorderTab.Panel>Tab Panel 1</BorderTab.Panel>
      <BorderTab.Panel>Tab Panel 2</BorderTab.Panel>
    </BorderTab.Panels>
  </BorderTab.Group>
);
```
