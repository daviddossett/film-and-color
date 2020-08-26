import React from 'react';

import './HeroImage.css';

interface HeroImageProps {
  imageUrl: string;
  className?: string;
}

export const HeroImage: React.FC<HeroImageProps> = ({ imageUrl }) => {
  const imageStyles = {
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <img
      src={imageUrl}
      className={'heroImageRoot'}
      style={imageStyles}
      alt={'Movie still to be analyzed'}
    />
  );
};
