import React from 'react';
import './Palette.css';
import { Swatch } from '../Swatch/Swatch';
import { PaletteProps } from './Palette.types';

export const Palette: React.FC<PaletteProps> = ({ palette }) => {
  const swatches: JSX.Element[] = [];

  for (let i = 0; i < palette.length; i++) {
    swatches.push(<Swatch color={palette[i]} key={i} />);
  }

  return <div className={'paletteRoot'}>{swatches}</div>;
};
