import { ComponentMeta } from '@storybook/react';

import { BasicTable } from '.';

import { noticeList } from '../../constants/mock';
import { Text } from '../Text';

export default {
  title: 'React/Table',
  component: BasicTable,
} as ComponentMeta<typeof BasicTable>;

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

export const Basic = () => (
  <BasicTable caption="test" columnsWidth={['10rem', '*', '12rem', '10rem']}>
    {noticeList.map(({ id, title, writer, date, view }) => (
      <BasicTable.Row key={id}>
        <BasicTable.BodyCell>
          <Text sx={{ textAlign: 'center' }} ellipsis>
            {writer}
          </Text>
        </BasicTable.BodyCell>
        <BasicTable.BodyCell>
          <Text ellipsis>{title}</Text>
        </BasicTable.BodyCell>
        <BasicTable.BodyCell>
          <Text sx={{ textAlign: 'center' }} ellipsis>
            {getDateForm(date)}
          </Text>
        </BasicTable.BodyCell>
        <BasicTable.BodyCell>
          <Text sx={{ textAlign: 'center' }} ellipsis>
            {view}
          </Text>
        </BasicTable.BodyCell>
      </BasicTable.Row>
    ))}
  </BasicTable>
);
