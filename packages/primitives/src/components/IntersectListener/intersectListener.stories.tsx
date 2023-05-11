import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useEffect, useState } from 'react';

import IntersectListener from './intersectListener';

export default {
  title: 'Primitives/IntersectListener',
  component: IntersectListener,
} as ComponentMeta<typeof IntersectListener>;

const Card = ({ number }) => (
  <div
    css={{
      display: 'flex',
      width: '300px',
      height: '400px',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#f5f5f5',
      border: '1ps solid #979797',
      borderRadius: '10px',
      boxShadow: '3px 3px 4px #bfbfbf',
    }}
  >
    <h1>{number}</h1>
  </div>
);

const datas = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const getData = (page: number) => datas[page];

export const Default: ComponentStory<typeof IntersectListener> = () => {
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
      <h1>Intersect Listener</h1>
      <div
        css={{
          display: 'flex',
          minWidth: '100%',
          flexWrap: 'wrap',
          gap: '40px 10px',
        }}
      >
        {elements.map((element) => (
          <Card key={element} number={element} />
        ))}
      </div>
    </IntersectListener>
  );
};
