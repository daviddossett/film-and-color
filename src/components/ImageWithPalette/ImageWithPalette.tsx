import React from 'react';

import './ImageWithPalette.css';
import { HeroImage } from '../HeroImage/HeroImage';
import { Palette } from '../Palette/Palette';
import { useFirestore } from '../../hooks/useFirestore';

interface ImageWithPaletteProps {
  className?: string;
}

export const ImageWithPalette: React.FC<ImageWithPaletteProps> = ({ className }) => {
  const { documents } = useFirestore('images');

  return (
    <div className={`${className} imageWithPaletteRoot`}>
      {documents.length > 0 && (
        <>
          <HeroImage image={documents[0].url} />
          <Palette image={documents[0].url} />
        </>
      )}
    </div>
  );
};
