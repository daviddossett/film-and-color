import React from 'react';
import './PaletteView.css';
import { Swatch } from '../Swatch/Swatch';

interface PaletteViewProps {
  className?: string;
  palette: string[];
}

export const PaletteView: React.FC<PaletteViewProps> = ({ palette }) => {
  const swatches: JSX.Element[] = [];

  for (let i = 0; i < palette.length; i++) {
    swatches.push(<Swatch color={palette[i]} />)
  }

  return (
    <div className={'paletteRoot'}>
      {swatches}
    </div> 
  );
}