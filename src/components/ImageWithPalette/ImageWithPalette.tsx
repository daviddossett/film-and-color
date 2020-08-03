import React from 'react';

import './ImageWithPalette.css';
import { HeroImage } from '../HeroImage/HeroImage';
import { Palette } from '../Palette/Palette';

interface ImageWithPaletteProps {
  image: string;
  title: string;
  ariaLabel: string;
}

export const ImageWithPalette: React.FC<ImageWithPaletteProps> = ({ image, title, ariaLabel }) => {
  return (
    <div className={'imageWithPaletteRoot'}>
      <HeroImage image={image} title={title} ariaLabel={ariaLabel} className={'heroImage'} />
      <Palette image={image} className={'palette'} />
    </div>
  );
};
