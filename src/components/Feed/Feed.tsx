import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Card } from '../Card/Card';
import { imageWithMetadata } from '../RootPage/RootPage.types';

interface FeedProps {
  images: imageWithMetadata[];
}

export const Feed: React.FC<FeedProps> = ({ images }) => {
  let i = 0;

  const cards = images.map((image) => (
    <li key={i++}>
      <Card title={image.title} imageUrl={image.url} />
    </li>
  ));

  return <ul>{cards}</ul>;
};
