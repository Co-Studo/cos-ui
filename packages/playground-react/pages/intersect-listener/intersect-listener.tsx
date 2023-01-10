import { IntersectListener } from '@cos-ui/primitives';
import { FlexBox, Paper, Text } from '@cos-ui/react';
import { useEffect, useState } from 'react';

const Card = ({ number }) => (
  <Paper
    sx={{
      display: 'flex',
      width: '300px',
      height: '400px',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text variant="body">hi {number}</Text>
  </Paper>
);

const datas = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const getData = (page: number) => datas[page];

const IntersectListenerPage = () => {
  const [page, setPage] = useState(0);
  const [elements, setElements] = useState<number[]>(getData(0));

  useEffect(() => {
    if (page !== 0) {
      setElements((prev) => [...prev, ...getData(page)]);
    }
  }, [page]);

  return (
    <IntersectListener
      onIntersect={() => {
        setPage((prev) => prev + 1);
      }}
      unobserve={page === 3}
    >
      <Text variant="sectionTitle">Intersect Listener</Text>
      <FlexBox sx={{ width: '1240px', flexWrap: 'wrap', gap: '40px 10px' }}>
        {elements.map((element) => (
          <Card key={element} number={element} />
        ))}
      </FlexBox>
    </IntersectListener>
  );
};

export default IntersectListenerPage;
