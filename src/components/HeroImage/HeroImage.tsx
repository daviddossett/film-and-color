import React from 'react';
import './HeroImage.css';
import { HeroImageProps } from './HeroImage.types';

export const HeroImage: React.FC<HeroImageProps> = ({ image }) => {
  const style = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div
      style={style}
      aria-label={'Still frame from a selected movie'}
      className={'heroRoot'}
    />
  );
};
