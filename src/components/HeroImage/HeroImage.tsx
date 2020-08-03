import React from 'react';
import './HeroImage.css';

interface HeroImageProps {
  image: string;
  title: string;
  ariaLabel: string;
  className?: string;
}

export const HeroImage: React.FC<HeroImageProps> = ({ image, title, ariaLabel }) => {
  return (
    <div className={'heroRoot'}>
      <h1>{title}</h1>
      <img src={image} alt={ariaLabel} />
    </div>
  );
};
