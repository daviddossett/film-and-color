import React from 'react';

import './TitleBar.css';

interface TitleBarProps {
  className?: string;
}

export const TitleBar: React.FC<TitleBarProps> = ({ className }) => {
  return (
    <div className={className}>
      <span className={'date'}>September 12 2020</span>
      <h1 className={'title'}>The Grand Budapest Hotel</h1>
    </div>
  );
};
