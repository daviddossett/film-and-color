import React from 'react';
import './Palette.css';
import { Swatch } from '../Swatch/Swatch';

interface PaletteProps {
  image: any;
  className?: any;
}

export const Palette: React.FC<PaletteProps> = ({ image }) => {
  // Generate palette from image jere
  let swatches: JSX.Element[] = [];

  return <div className={'paletteRoot'}>{swatches}</div>;
};
