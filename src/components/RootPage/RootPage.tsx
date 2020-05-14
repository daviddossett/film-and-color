import React from 'react';

import './RootPage.css';
import { imageWithMetadata, RootPageProps } from './RootPage.types';
import { Feed } from '../Feed/Feed';

const imagesWithMetaData: imageWithMetadata[] = [
  {
    url: 'https://images4.alphacoders.com/597/thumb-1920-597547.jpg',
    title: 'The Grand Budapest Hotel',
  },
];

const currentDate = new Date().toString();

export const RootPage: React.FC<RootPageProps> = () => {
  return (
    <div className={'rootWrapper'}>
      <div className={'header'}>
        <p className={'date'}>{currentDate}</p>
        <h1>Film and Color</h1>
        <Feed images={imagesWithMetaData} />
      </div>
    </div>
  );
};
