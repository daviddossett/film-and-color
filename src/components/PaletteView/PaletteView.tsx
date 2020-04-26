import React, { ReactElement, ReactNode, ReactFragment } from 'react';
import './PaletteView.css';

interface PaletteViewProps {
  colors?: string[];
  className: string;
}

const swatches: JSX.Element[] = [];

for (let i = 0; i < 12; i++) {
  swatches.push(<div className={'swatch'} />)
}

export const PaletteView: React.FC<PaletteViewProps> = ({ colors }) => {
  return (
    <>
      {swatches}
    </> 
  );
}