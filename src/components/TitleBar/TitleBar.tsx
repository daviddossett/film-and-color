import React from 'react';

import './TitleBar.css';

interface TitleBarProps {
  title: string;
  className?: string;
}

const date = new Date().toDateString();

export const TitleBar: React.FC<TitleBarProps> = ({ className, title }) => {
  return (
    <div className={`${className} title-bar-root`}>
      <h1 className={'title'}>{title}</h1>
      <span className={'date'}>{date}</span>
    </div>
  );
};
