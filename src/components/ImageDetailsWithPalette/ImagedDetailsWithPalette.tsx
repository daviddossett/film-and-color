import React from 'react';

import { Palette } from '../Palette/Palette';

interface ImageDetailsWithPaletteProps {
  imageUrl: string;
  className?: string;
}

export const ImageDetailsWithPalette: React.FC<ImageDetailsWithPaletteProps> = ({
  imageUrl,
}) => {
  return (
    <div>
      <p>placeholder</p>
      <p>placeholder</p>
      <Palette image={imageUrl} />
    </div>
  );
};
