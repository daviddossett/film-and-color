import React from 'react';

import './ImageWithPalette.css';
import { HeroImage } from '../HeroImage/HeroImage';
import { Palette } from '../Palette/Palette';
import { useFirestore } from '../../hooks/useFirestore';

interface ImageWithPaletteProps {
  className?: string;
}

export const ImageWithPalette: React.FC<ImageWithPaletteProps> = () => {
  const { documents } = useFirestore('images');
  console.log(documents);

  return (
    <div className={'root'}>
      {documents.length > 0 && (
        <>
          <HeroImage image={documents[0].url} />
          <Palette image={documents[0].url} />
        </>
      )}
    </div>
  );
};
