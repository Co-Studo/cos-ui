import { RowTable, Text, FlexBox } from '@cos-ui/react';

import { SortingIcon } from '@constants/icons';
import { noticeList } from '@constants/mock';

const sortingValues = {
  writer: noticeList.map(({ writer }) => writer),
  date: noticeList.map(({ date }) => date),
  view: noticeList.map(({ view }) => Number(view)),
};

const getDateForm = (date: number) => {
  const dateArray = [
    new Date(date).getFullYear(),
    new Date(date).getMonth() + 1,
    new Date(date).getDate(),
  ];

  return dateArray
    .map((number) => (number < 10 ? `0${number}` : number))
    .join('.');
};

const RowTablePage = () => (
  <RowTable
    caption="공지사항"
    columnsWidth={['12rem', '25%', '25%', '25%', '25%']}
    sortingValues={sortingValues}
  >
    <RowTable.Row>
      <RowTable.HeadCell>번호</RowTable.HeadCell>
      {noticeList.map(({ id }) => (
        <RowTable.BodyCell key={id}>
          <Text ellipsis>{id}</Text>
        </RowTable.BodyCell>
      ))}
    </RowTable.Row>
    <RowTable.Row>
      <RowTable.HeadCell>제목</RowTable.HeadCell>
      {noticeList.map(({ id, title }) => (
        <RowTable.BodyCell key={id}>
          <Text ellipsis>{title}</Text>
        </RowTable.BodyCell>
      ))}
    </RowTable.Row>
    <RowTable.Row>
      <RowTable.HeadCell name="writer">
        <FlexBox
          sx={{ justifyContent: 'center', alignItems: 'center', gap: '1rem' }}
        >
          작성자
          <SortingIcon />
        </FlexBox>
      </RowTable.HeadCell>
      {noticeList.map(({ id, writer }) => (
        <RowTable.BodyCell key={id}>
          <Text ellipsis>{writer}</Text>
        </RowTable.BodyCell>
      ))}
    </RowTable.Row>
    <RowTable.Row>
      <RowTable.HeadCell name="date">
        <FlexBox
          sx={{ justifyContent: 'center', alignItems: 'center', gap: '1rem' }}
        >
          날짜
          <SortingIcon />
        </FlexBox>
      </RowTable.HeadCell>
      {noticeList.map(({ id, date }) => (
        <RowTable.BodyCell key={id}>
          <Text ellipsis>{getDateForm(date)}</Text>
        </RowTable.BodyCell>
      ))}
    </RowTable.Row>
    <RowTable.Row>
      <RowTable.HeadCell name="view">
        <FlexBox
          sx={{ justifyContent: 'center', alignItems: 'center', gap: '1rem' }}
        >
          조회수
          <SortingIcon />
        </FlexBox>
      </RowTable.HeadCell>
      {noticeList.map(({ id, view }) => (
        <RowTable.BodyCell key={id}>
          <Text ellipsis>{view}</Text>
        </RowTable.BodyCell>
      ))}
    </RowTable.Row>
  </RowTable>
);

export default RowTablePage;
