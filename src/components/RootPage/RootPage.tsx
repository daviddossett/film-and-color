import React from 'react';

import './RootPage.css';
import { imageWithMetadata, RootPageProps } from './RootPage.types';
import { Feed } from '../Feed/Feed';
import { currentDate } from '../../helpers/getDate';

const imagesWithMetaData: imageWithMetadata[] = [
  {
    url: 'https://images4.alphacoders.com/597/thumb-1920-597547.jpg',
    title: 'The Grand Budapest Hotel',
    key: 0,
  },
  {
    url: 'https://cdn.onebauer.media/one/empire-tmdb/films/153/images/iJP2ogeM5YpZyUOkmCiZ5UXWyBf.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg',
    title: 'Lost In Translation',
    key: 1,
  },
  {
    url: 'https://anotherimg-dazedgroup.netdna-ssl.com/900/azure/another-prod/390/7/397925.jpg',
    title: 'Hotel Chevalier',
    key: 2,
  },
  {
    url: 'https://images4.alphacoders.com/597/thumb-1920-597547.jpg',
    title: 'The Grand Budapest Hotel',
    key: 0,
  },
  {
    url: 'https://cdn.onebauer.media/one/empire-tmdb/films/153/images/iJP2ogeM5YpZyUOkmCiZ5UXWyBf.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg',
    title: 'Lost In Translation',
    key: 1,
  },
  {
    url: 'https://anotherimg-dazedgroup.netdna-ssl.com/900/azure/another-prod/390/7/397925.jpg',
    title: 'Hotel Chevalier',
    key: 2,
  },
];


export const RootPage: React.FC<RootPageProps> = () => {
  return (
    <div className={'rootWrapper'}>
      <div className={'header'}>
        <p className={'date'}>{currentDate}</p>
        <h1>Film and Color</h1>
      </div>
        <Feed images={imagesWithMetaData} />
    </div>
  );
};
