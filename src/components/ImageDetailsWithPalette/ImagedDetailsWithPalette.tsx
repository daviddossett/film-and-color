import React from 'react';

import color from '../../images/fluent-color.svg';
import movie from '../../images/fluent-movie.svg';
import director from '../../images/fluent-director.svg';
import { IconWithPalette } from '../IconWithPalette/IconWithPalette';
import { IconWithText } from '../IconWithText/IconWithText';

interface ImageDetailsWithPaletteProps {
  imageUrl: string;
  movieTitle: string;
  movieDirector: string;
  className?: string;
}

export const ImageDetailsWithPalette: React.FC<ImageDetailsWithPaletteProps> = ({
  movieTitle,
  movieDirector,
  imageUrl,
}) => {
  return (
    <div>
      <IconWithPalette icon={color} imageUrl={imageUrl} />
      <IconWithText icon={movie} text={movieTitle} />
      <IconWithText icon={director} text={movieDirector} />
    </div>
  );
};
