import React from 'react';

import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <div className={'footer'}>
      <p>
        Inspired by&nbsp;
        <a
          href={'https://www.instagram.com/filmandcolor/?hl=en'}
          target='_blank'
        >
          Film and Color
        </a>
      </p>
      <p>
        Made by&nbsp;
        <a href={'https://twitter.com/david_dossett'} target='_blank'>
          me
        </a>
      </p>
    </div>
  );
};
