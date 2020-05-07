import React from 'react';

import { Card } from '../Card/Card';
import { FeedProps } from './Feed.types';

export const Feed: React.FC<FeedProps> = ({ images }) => {
  let i = 0;

  const cards = images.map(({ title, url }) => (
    <li key={i++}>
      <Card title={title} imageUrl={url} />
    </li>
  ));

  return <ul>{cards}</ul>;
};
