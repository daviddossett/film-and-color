import React from 'react';
import './Swatch.css';

export interface SwatchProps {
  isLoading: boolean;
  color?: string;
  className?: string;
}

export const Swatch: React.FC<SwatchProps> = ({ color, isLoading }) => {
  const style = {
    backgroundColor: color,
  };

  if (isLoading) return <div className={'loadingSwatch'} />;

  return <div style={style} className={'swatchWrapper'}>
    <div className={'hex-wrapper'}>
      <p className={'hex'}>{color}</p>
    </div>
  </div>;
};
