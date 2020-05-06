import React from 'react';
import './Swatch.css';
import { SwatchProps } from './Swatch.types';

export const Swatch: React.FC<SwatchProps> = ({ color }) => {
  const style = {
    backgroundColor: color,
  };
  return <div style={style} className={'swatchWrapper'} />;
};
