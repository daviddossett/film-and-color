import React from 'react';

import './TitleBar.css';

interface TitleBarProps {
  title: string;
  className?: string;
}

const date = new Date().toDateString();

export const TitleBar: React.FC<TitleBarProps> = ({ className, title }) => {
  return (
    <div className={className}>
      <span className={'date'}>{date}</span>
      <h1 className={'title'}>{title}</h1>
    </div>
  );
};
