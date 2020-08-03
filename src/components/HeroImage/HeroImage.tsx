import React from 'react';
import './HeroImage.css';

interface HeroImageProps {
  image: string;
  title: string;
  ariaLabel: string;
  className?: string;
}

export const HeroImage: React.FC<HeroImageProps> = ({ image, title, ariaLabel }) => {
  const imageStyles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
  };
  return (
    <div className={'heroImageRoot'} style={imageStyles}>
      <h1 className={'title'}>{title}</h1>
    </div>
  );
};
