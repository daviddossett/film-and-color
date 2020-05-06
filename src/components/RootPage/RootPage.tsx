import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import './RootPage.css';
import { Feed } from '../Feed/Feed';
import { imageWithMetadata, RootPageProps } from './RootPage.types';

const imagesWithMetaData: imageWithMetadata[] = [
  {
    url: 'https://images4.alphacoders.com/597/thumb-1920-597547.jpg',
    title: 'The Grand Budapest Hotel',
  },
  {
    url: 'https://images4.alphacoders.com/597/thumb-1920-597547.jpg',
    title: 'Another movie title',
  },
];

export const RootPage: React.FC<RootPageProps> = () => {
  return <Feed images={imagesWithMetaData} />
};
