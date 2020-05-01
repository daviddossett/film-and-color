import React from 'react';
import './HeroImage.css';

interface HeroImageProps {
  image: string;
  className?: string;
}

export const HeroImage: React.FC<HeroImageProps> = ({ image }) => {
  return (
    <img
      src={image}
      aria-label={'Still frame from a selected movie'}
      className={'heroRoot'}
    />
  );
};
