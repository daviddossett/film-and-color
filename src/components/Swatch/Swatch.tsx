import React, { CSSProperties } from 'react';
import './Swatch.css';

interface SwatchProps {
  className?: string;
  color: string;
}

export const Swatch: React.FC<SwatchProps> = ({ color }) => {
    const style = {
        backgroundColor: color,
    }
  return (
    <div style={style} className={'swatchWrapper'} />
  );
}