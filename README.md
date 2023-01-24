# COS UI

### Packages

| Name | Description |
| --- | --- |
| [@cos-ui/primitives](https://github.com/Co-Studo/cos-ui/tree/dev/packages/primitives) | Headless UI 컴포넌트들을 모아둔 패키지 |
| [@cos-ui/react](https://github.com/Co-Studo/cos-ui/tree/dev/packages/react) | CoStudo 프로젝트에서 사용될 스타일링된 Headless UI 컴포넌트들과 디자인 관련 요소들을 모아둔 패키지 |
| [@cos-ui/playground-react](https://github.com/Co-Studo/cos-ui/tree/dev/packages/playground-react) | @cos-ui/react 패키지에 작성한 컴포넌트들을 모아볼 수 있는 페이지를 제공하는 패키지 |

<br/>

### Documentation

<br/>

```sh
$ git clone https://github.com/Co-Studo/cos-ui.git

$ yarn install

$ yarn build
```

- 클론 후 `install`, `build`를 실행하면 다른 패키지의 컴포넌트를 인식할 수 있다.
- 개별 패키지의 빌드는 각 패키지의 `build`를 실행하면 가능하다.

<br/>

```sh
$ yarn watch
```

- 개발 시 실행하면 primitives, react 패키지에서 수정된 사항을 playground-react 에서 바로 확인 가능하다.<br/>
  (단, 타입과 관련한 수정사항의 경우 반영되지 않으므로 다시 빌드하는 과정이 필요하다.)
- primitives, react 패키지의 수정사항을 모두 반영하며, 개별 패키지의 수정사항 반영만 필요한 경우 playground-react 패키지의 `watch:primitives` 또는 `watch:react`를 실행하거나 각 패키지에서 `watch`를 실행하면 된다.

<br/>

```sh
$ yarn clean
```

- 파일이나 폴더를 삭제하는 경우 빌드하면 반영이 되지 않기 때문에 `clean`을 실행해 폴더를 제거한 뒤 다시 빌드한다.
- 마찬가지로 각 패키지의 `clean`을 실행하면 개별 패키지의 빌드 결과물을 제거할 수 있다.
