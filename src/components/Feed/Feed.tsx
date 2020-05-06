import React from 'react';

import { Card } from '../Card/Card';
import { FeedProps } from './Feed.types';

export const Feed: React.FC<FeedProps> = ({ images }) => {
  let i = 0;

  const cards = images.map((image) => (
    <li key={i++}>
      <Card title={image.title} imageUrl={image.url} />
    </li>
  ));

  return <ul>{cards}</ul>;
};
