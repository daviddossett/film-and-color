import React from 'react';

import './RootPage.css';
import { Feed } from '../Feed/Feed';
import { imageWithMetadata, RootPageProps } from './RootPage.types';

const imagesWithMetaData: imageWithMetadata[] = [
  {
    url: 'https://images4.alphacoders.com/597/thumb-1920-597547.jpg',
    title: 'The Grand Budapest Hotel',
  },
];

export const RootPage: React.FC<RootPageProps> = () => {
  return (
    <div className={'rootWrapper'}>
      <div className={'header'}>
        <p className={'date'}>SATURDAY MAY 2</p>
        <h1 className={'title'}>Film and Color</h1>
      </div>
      {/* <Feed images={imagesWithMetaData} />; */}
    </div>
  );
};
