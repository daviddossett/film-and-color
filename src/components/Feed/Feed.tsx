import React from 'react';

import { Card } from '../Card/Card';
import { FeedProps } from './Feed.types';
import './Feed.css';

export const Feed: React.FC<FeedProps> = ({ images }) => {
  let i: number = 0;

  const cards = images.map(image => <Card title={image.title} imageUrl={image.url} key={i++} />);
  return (
    <div className={'feedWrapper'}>
      <ul>{cards}</ul>
    </div>
  );
};
