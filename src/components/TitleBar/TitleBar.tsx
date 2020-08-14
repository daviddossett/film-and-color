import React from 'react';

import './TitleBar.css';

interface TitleBarProps {
  className?: string;
}

export const TitleBar: React.FC<TitleBarProps> = ({ className }) => {

  return (
    <nav className={`${className} titleRoot`}></nav>
  );
};
