import React from 'react';

import { Card } from '../Card/Card';
import { FeedProps } from './Feed.types';
import './Feed.css';

export const Feed: React.FC<FeedProps> = ({ images }) => {
  const cards = images.map(image => <Card title={image.title} imageUrl={image.url} />);
  return (
    <div className={'feedWrapper'}>
      <ul>{cards}</ul>
    </div>
  );
};
