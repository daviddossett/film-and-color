import React from 'react';

import './ImageWithPalette.css';
import { HeroImage } from '../HeroImage/HeroImage';
import { Palette } from '../Palette/Palette';

interface ImageWithPaletteProps {
  image: string;
  className?: string;
}

export const ImageWithPalette: React.FC<ImageWithPaletteProps> = ({
  image,
  className,
}) => {
  return (
    <div className={`${className} imageWithPalette`}>
      <Palette image={image} />
      <HeroImage imageUrl={image} />
    </div>
  );
};
