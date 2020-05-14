import React from 'react';

import { Card } from '../Card/Card';
import { FeedProps } from './Feed.types';
import './Feed.css';

export const Feed: React.FC<FeedProps> = ({ images }) => {
  let i = 0;

  const cards = images.map(({ title, url }) => (
    <div className={'feedWrapper'}>
      <li key={i++}>
        <Card title={title} imageUrl={url} />
      </li>
    </div>
  ));

  return <ul>{cards}</ul>;
};
