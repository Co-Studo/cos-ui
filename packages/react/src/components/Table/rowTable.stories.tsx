import { ComponentMeta } from '@storybook/react';

import { RowTable } from '.';

import { noticeList } from '../../constants/mock';
import { FlexBox } from '../FlexBox';
import Text from '../Text';

export default {
  title: 'React/Table',
  component: RowTable,
} as ComponentMeta<typeof RowTable>;

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

export const Row = () => (
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
          sx={{ justifyContent: 'center', alignItems: 'center', gap: 5 }}
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
          sx={{ justifyContent: 'center', alignItems: 'center', gap: 5 }}
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
          sx={{ justifyContent: 'center', alignItems: 'center', gap: 5 }}
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
