import { ComponentMeta } from '@storybook/react';

import { FlexBox } from '@components/FlexBox';
import { ColumnTable } from '@components/Table';
import Text from '@components/Text';
import { noticeList } from '@constants/mock';

export default {
  title: 'React/Table',
  component: ColumnTable,
} as ComponentMeta<typeof ColumnTable>;

const sortingValues = {
  writer: noticeList.map(({ writer }) => writer),
  date: noticeList.map(({ date }) => date),
  view: noticeList.map(({ view }) => view),
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

const SortingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="14"
    viewBox="0 0 17 14"
  >
    <path
      id="다각형_3"
      data-name="다각형 3"
      d="M7.645,1.408a1,1,0,0,1,1.71,0l6.723,11.073A1,1,0,0,1,15.223,14H1.777a1,1,0,0,1-.855-1.519Z"
      transform="translate(17 14) rotate(180)"
      fill="#007aff"
    />
  </svg>
);

export const Column = () => (
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
          sx={{ justifyContent: 'center', alignItems: 'center', gap: 5 }}
        >
          작성자
          <SortingIcon />
        </FlexBox>
      </ColumnTable.HeadCell>
      <ColumnTable.HeadCell name="date">
        <FlexBox
          sx={{ justifyContent: 'center', alignItems: 'center', gap: 5 }}
        >
          날짜
          <SortingIcon />
        </FlexBox>
      </ColumnTable.HeadCell>
      <ColumnTable.HeadCell name="view">
        <FlexBox
          sx={{ justifyContent: 'center', alignItems: 'center', gap: 5 }}
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
