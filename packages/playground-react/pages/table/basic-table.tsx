import { BasicTable, Text } from '@cos-ui/react';

import { noticeList } from '@constants/mock';
import { getDateForm } from '@helpers/table';

const BasicTablePage = () => (
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

export default BasicTablePage;
