import React from 'react';

import './ImageWithPalette.css';
import { HeroImage } from '../HeroImage/HeroImage';
import { Palette } from '../Palette/Palette';

interface ImageWithPaletteProps {
  image: string;
}

export const ImageWithPalette: React.FC<ImageWithPaletteProps> = ({
  image,
}) => {
  return (
    <div className={'imageWithPalette'}>
      <HeroImage imageUrl={image} />
      <Palette image={image} />
    </div>
  );
};
