import { ColumnTable, Text, FlexBox } from '@cos-ui/react';

const noticeList = [
  {
    id: 1,
    title: '스터디 가입전 해당 공지사항을 숙지해주세요.',
    writer: '파크',
    date: '2022.10.22',
    view: 101,
  },
  {
    id: 2,
    title: '스터디 전체 공지 드립니다.',
    writer: '도니',
    date: '2022.09.20',
    view: 110,
  },
  {
    id: 3,
    title: '스터디 전체 공지 드립니다.',
    writer: '햄디',
    date: '2022.09.20',
    view: 9,
  },
  {
    id: 4,
    title: '스터디 전체 공지 드립니다.',
    writer: '제이미',
    date: '2022.09.22',
    view: 9,
  },
];

const sortValues = {
  writer: noticeList.map(({ writer }) => writer),
  date: noticeList.map(({ date }) => {
    const numberDate = Number(date.split('.').join(''));
    return numberDate.toString().length < 8 ? numberDate * 10 : numberDate;
  }),
  view: noticeList.map(({ view }) => Number(view)),
};

const SortIcon = () => (
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

const ColumnTablePage = () => (
  <ColumnTable
    caption="공지사항"
    columnsWidth={['85px', '*', '120px', '120px', '120px']}
    sortValues={sortValues}
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
          <SortIcon />
        </FlexBox>
      </ColumnTable.HeadCell>
      <ColumnTable.HeadCell name="date">
        <FlexBox
          sx={{ justifyContent: 'center', alignItems: 'center', gap: '1rem' }}
        >
          날짜
          <SortIcon />
        </FlexBox>
      </ColumnTable.HeadCell>
      <ColumnTable.HeadCell name="view">
        <FlexBox
          sx={{ justifyContent: 'center', alignItems: 'center', gap: '1rem' }}
        >
          조회수
          <SortIcon />
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
