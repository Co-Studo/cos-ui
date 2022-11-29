import { ColumnTable, Text, FlexBox } from '@cos-ui/react';

import { noticeList, SortingIcon } from './constants';

const sortingValues = {
  writer: noticeList.map(({ writer }) => writer),
  date: noticeList.map(({ date }) => {
    const numberDate = Number(date.split('.').join(''));
    return numberDate.toString().length < 8 ? numberDate * 10 : numberDate;
  }),
  view: noticeList.map(({ view }) => Number(view)),
};

const ColumnTablePage = () => (
  <ColumnTable
    caption="공지사항"
    columnsWidth={['85px', '*', '120px', '120px', '120px']}
    sortingValues={sortingValues}
  >
    <ColumnTable.Row>
      <ColumnTable.HeadCell>
        <Text as="div" sx={{ textAlign: 'center' }}>
          번호
        </Text>
      </ColumnTable.HeadCell>
      <ColumnTable.HeadCell>제목</ColumnTable.HeadCell>
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
            {date}
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
