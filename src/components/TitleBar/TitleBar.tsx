import React from 'react';

import './TitleBar.css';

interface TitleBarProps {
  className?: string;
}

export const TitleBar: React.FC<TitleBarProps> = ({ className }) => {

  return (
    <div className={`${className} titleRoot`}>
      <span className={'date'}>AUG 25 2020</span>
      <h1>Film and Color</h1>
    </div>
  );
};
