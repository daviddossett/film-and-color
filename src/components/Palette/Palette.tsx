import React, { useState, useEffect } from 'react';
import Clarifai from 'clarifai';

import { Swatch } from '../Swatch/Swatch';
import './Palette.css';

interface PaletteProps {
  image: any;
  className?: any;
}

const modelId = process.env.REACT_APP_CLARIFAI_MODEL_KEY;

const clarifai = new Clarifai.App({
  apiKey: process.env.REACT_APP_CLARIFAI_API_KEY,
});

export const Palette: React.FC<PaletteProps> = ({ image }) => {
  const [loading, setLoading] = useState(true);
  const [palette, setPalette] = useState([]);

  useEffect(() => {
    async function getPalette() {
      let response = await clarifai.models.predict(modelId, image);
      let colors = response.outputs[0].data.colors;
      let generatedPalette = colors.map((color: any) => color.raw_hex);
      setPalette(generatedPalette);
    }
    getPalette();
  }, [image]);

  useEffect(() => {
    if (palette.length > 0) {
      setLoading(false);
    }
  }, [setLoading, palette]);

  if (loading) {
    let shimmers = [];
    let numberOfShimmers = 4;
    for (let i = 0; i < numberOfShimmers; i++) {
      shimmers.push(<Swatch key={i} isLoading={loading} />);
    }
    return <div className={'paletteRoot'}>{shimmers}</div>;
  }

  let swatches = palette.map((color) => {
    return <Swatch key={color} isLoading={loading} color={color} />;
  });

  return <div className={'paletteRoot'}>{swatches}</div>;
};
