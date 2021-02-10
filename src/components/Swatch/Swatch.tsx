import React from 'react';
import './Swatch.css';

export interface SwatchProps {
  isLoading: boolean;
  color?: string;
  className?: string;
}

declare global {
  interface Window { analytics: any; }
}


export const Swatch: React.FC<SwatchProps> = ({ color, isLoading }) => {
  const style = {
    backgroundColor: color,
  };

  function handleSwatchHover(): any {
    window.analytics.track("Swatch hovered", {
      hexValue: color,
    });
  }

  if (isLoading) return <div className={'loadingSwatch'} />;

  return <div style={style} className={'swatchWrapper'}>
    <div className={'hex-wrapper'}>
      <p onMouseOver={handleSwatchHover}className={'hex'}>{color}</p>
    </div>
  </div>;
};
