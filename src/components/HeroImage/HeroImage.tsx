import React from 'react';
import './HeroImage.css';

interface HeroImageProps {
  image: string;
  className?: string;
}

export const HeroImage: React.FC<HeroImageProps> = ({ image }) => {
  const imageStyles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  };
  return <div className={'heroImageRoot'} style={imageStyles} />;
};
