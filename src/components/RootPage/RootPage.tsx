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

const currentWeekday = new Date().getDay();
const currentDayOfMonth = new Date().getDate().toString();
const currentMonth = new Date().getMonth()
const currentYear = new Date().getFullYear().toString()

const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const RootPage: React.FC<RootPageProps> = () => {
  return (
    <div className={'rootWrapper'}>
      <div className={'header'}>
        <p className={'date'}>{`${weekday[currentWeekday]} ${month[currentMonth]} ${currentDayOfMonth} ${currentYear}`}</p>
        <h1>Film and Color</h1>
        <Feed images={imagesWithMetaData} />
      </div>
    </div>
  );
};
