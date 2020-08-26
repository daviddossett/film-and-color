import React from 'react';

import './IconWithText.css';

interface IconWithTextProps {
  icon: any;
  text: string;
}

export const IconWithText: React.FC<IconWithTextProps> = ({ icon, text }) => {
  return (
    <div className={'iconWithTextRoot'}>
      <img src={icon} alt={'Icon element'} className={'icon'} />
      <p>{text}</p>
    </div>
  );
};
