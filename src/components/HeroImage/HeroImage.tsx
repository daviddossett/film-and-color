import React from 'react';
import './HeroImage.css';

interface HeroImageProps {
  imageUrl: string;
  className: string;
}

export const HeroImage: React.FC<HeroImageProps> = ({ imageUrl }) => {
  return (
      <>
        <img src={imageUrl} />
      </>
  )
}