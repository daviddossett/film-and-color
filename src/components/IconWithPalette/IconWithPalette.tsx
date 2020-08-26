import React from 'react';

import { Palette } from '../Palette/Palette';
import './IconWithPalette.css';

interface IconWithPaletteProps {
  icon: any;
  imageUrl: string;
}

export const IconWithPalette: React.FC<IconWithPaletteProps> = ({
  icon,
  imageUrl,
}) => {
  return (
    <div className={'iconWithPaletteRoot'}>
      <img src={icon} alt={'Icon element'} className={'icon'} />
      <Palette image={imageUrl} className={'palette'} />
    </div>
  );
};
