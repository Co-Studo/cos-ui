import { ColumnTable, Text, FlexBox } from '@cos-ui/react';

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

const ColumnTablePage = () => (
  <ColumnTable
    caption="공지사항"
    columnsWidth={['8.5rem', '*', '12rem', '12rem', '12rem']}
    sortingValues={sortingValues}
  >
    <ColumnTable.Row>
      <ColumnTable.HeadCell>번호</ColumnTable.HeadCell>
      <ColumnTable.HeadCell>
        <Text as="div" sx={{ textAlign: 'left' }}>
          제목
        </Text>
      </ColumnTable.HeadCell>
      <ColumnTable.HeadCell name="writer">
        <FlexBox
          sx={{ justifyContent: 'center', alignItems: 'center', gap: '1rem' }}
        >
          작성자
          <SortingIcon />
        </FlexBox>
      </ColumnTable.HeadCell>
      <ColumnTable.HeadCell name="date">
        <FlexBox
          sx={{ justifyContent: 'center', alignItems: 'center', gap: '1rem' }}
        >
          날짜
          <SortingIcon />
        </FlexBox>
      </ColumnTable.HeadCell>
      <ColumnTable.HeadCell name="view">
        <FlexBox
          sx={{ justifyContent: 'center', alignItems: 'center', gap: '1rem' }}
        >
          조회수
          <SortingIcon />
        </FlexBox>
      </ColumnTable.HeadCell>
    </ColumnTable.Row>
    {noticeList.map(({ id, title, writer, date, view }) => (
      <ColumnTable.Row key={id}>
        <ColumnTable.BodyCell>
          <Text sx={{ textAlign: 'center' }} ellipsis>
            {id}
          </Text>
        </ColumnTable.BodyCell>
        <ColumnTable.BodyCell>
          <Text ellipsis>{title}</Text>
        </ColumnTable.BodyCell>
        <ColumnTable.BodyCell>
          <Text sx={{ textAlign: 'center' }} ellipsis>
            {writer}
          </Text>
        </ColumnTable.BodyCell>
        <ColumnTable.BodyCell>
          <Text sx={{ textAlign: 'center' }} ellipsis>
            {getDateForm(date)}
          </Text>
        </ColumnTable.BodyCell>
        <ColumnTable.BodyCell>
          <Text sx={{ textAlign: 'center' }} ellipsis>
            {view}
          </Text>
        </ColumnTable.BodyCell>
      </ColumnTable.Row>
    ))}
  </ColumnTable>
);

export default ColumnTablePage;
