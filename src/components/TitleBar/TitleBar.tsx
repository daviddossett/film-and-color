import React from 'react';

import './TitleBar.css';

interface TitleBarProps {
  className?: string;
}

const date = new Date().toDateString();

export const TitleBar: React.FC<TitleBarProps> = ({ className }) => {
  return (
    <div className={className}>
      <span className={'date'}>{date}</span>
      <h1 className={'title'}>The Grand Budapest Hotel</h1>
    </div>
  );
};
