import React, { useState, useEffect } from 'react';
import Clarifai from 'clarifai';

import { Swatch } from '../Swatch/Swatch';
import './Palette.css';

interface PaletteProps {
  image: any;
  className?: any;
}

const modelId = 'eeed0b6733a644cea07cf4c60f87ebb7';

const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_CLARIFAI_KEY,
});

export const Palette: React.FC<PaletteProps> = ({ image }) => {
  const [palette, setPalette] = useState([]);

  async function getPalette() {
    let response = await app.models.predict(modelId, image);
    let colors = response.outputs[0].data.colors;
    let palette = [];

    for (let i = 0; i < colors.length; i++) {
      palette.push(colors[i].raw_hex);
    }
    return palette;
  }

  useEffect(() => {
    function handlePaletteUpdate(somePalette: any) {
      setPalette(somePalette);
    }
    getPalette().then(function (response) {
      handlePaletteUpdate(response);
    });
  }, []);

  let swatches: JSX.Element[] = palette.map((color) => {
    return <Swatch color={color} />;
  });

  return <div className={'paletteRoot'}>{swatches}</div>;
};
