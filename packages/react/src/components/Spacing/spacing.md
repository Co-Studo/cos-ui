# Spacing

- 요소간 간격을 주기 위한 Spacing 컴포넌트 입니다.
- 페이지 내 컴포넌트 구성시 sx prop 을 통해 spacing 을 주는 것은 해당 컴포넌트의 역할이라고 보기 어렵고, 파편화된 Spacing 관리를 용이하게 하기 위해 사용합니다.

## Props

- `size` : width, height 에 지정할 사이즈를 입력합니다. `default: 1rem`
- `sx` : `SizeSX` 관련 속성을 활용할 수 있습니다.

```tsx
const UserDetailPage = () => {
  return (
    <PageLayout>
      <UserProfile />
      <Spacing size="6.5rem" />
      <StudyList studies={userDetail?.studyIds || []} />
      <Spacing size="3rem" />
      {userDetail && <UserHeatMap user={userDetail} />}
      <Spacing size="5rem" />
      <ArticleList articles={userDetail?.articleIds || []} />
    </PageLayout>
  );
};
```
