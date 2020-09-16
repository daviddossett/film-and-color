import React from 'react';

import './TitleBar.css';

interface TitleBarProps {
  className?: string;
}

const date = new Date().toDateString();

export const TitleBar: React.FC<TitleBarProps> = ({ className }) => {
  return (
    <div className={`${className} title-bar-root`}>
      <h1 className={'title'}>Film and Color</h1>
      <span className={'date'}>{date}</span>
    </div>
  );
};
