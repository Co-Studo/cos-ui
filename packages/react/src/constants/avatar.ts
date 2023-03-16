export const AVATARS = [
  {
    id: 1,
    name: 'jamie',
    src: 'https://avatars.githubusercontent.com/u/62706988?v=4',
  },
  {
    id: 2,
    name: 'park',
    src: 'https://avatars.githubusercontent.com/u/58503584?v=4',
  },
  {
    id: 3,
    name: 'hemdi',
    src: 'https://avatars.githubusercontent.com/u/34249911?v=4',
  },
  {
    id: 4,
    name: 'dony',
    src: 'https://avatars.githubusercontent.com/u/17706346?v=4',
  },
  {
    id: 5,
    name: 'costudo',
    src: 'https://avatars.githubusercontent.com/u/110013278?v=4',
  },
];

export const AVATARS_GROUP = {
  double: new Array(10)
    .fill(0)
    .map(() => AVATARS)
    .flat()
    .map((avatar, index) => ({ ...avatar, id: index })),
  triple: new Array(100)
    .fill(0)
    .map(() => AVATARS)
    .flat()
    .map((avatar, index) => ({ ...avatar, id: index })),
  four: new Array(1000)
    .fill(0)
    .map(() => AVATARS)
    .flat()
    .map((avatar, index) => ({ ...avatar, id: index })),
};
