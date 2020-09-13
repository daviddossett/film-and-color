import React from 'react';

import './HeroImage.css';

interface HeroImageProps {
  imageUrl: string;
  className?: string;
}

export const HeroImage: React.FC<HeroImageProps> = ({
  imageUrl,
  className,
}) => {
  const imageStyles = {
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <img
      src={imageUrl}
      className={`${className} heroImageRoot`}
      style={imageStyles}
      alt={'Movie still to be analyzed'}
    />
  );
};
