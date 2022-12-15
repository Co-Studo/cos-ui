import Arrow from './arrow.svg';
import Bell from './bell.svg';
import Crown from './crown.svg';
import Flag from './flag.svg';
import Lock from './lock.svg';
import Sort from './sort.svg';
import Star from './star.svg';

export const icon = {
  arrow: Arrow,
  bell: Bell,
  crown: Crown,
  flag: Flag,
  lock: Lock,
  sort: Sort,
  star: Star,
};

export type IconName = keyof typeof icon;
