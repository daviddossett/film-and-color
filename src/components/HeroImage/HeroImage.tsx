import React from 'react';

import './HeroImage.css';

interface HeroImageProps {
  image: string;
  className?: string;
}

export const HeroImage: React.FC<HeroImageProps> = ({ image }) => {
  const imageStyles = {
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <img
      src={image}
      className={'heroImageRoot'}
      style={imageStyles}
      alt={'Movie still to be analyzed'}
    />
  );
};
