import React, { useState, useEffect } from 'react';
import Clarifai from 'clarifai';
import { CardProps } from './Card.types';
import { Palette } from '../Palette/Palette';

import './Card.css';

export const Card: React.FC<CardProps> = ({ title, imageUrl }) => {
  const [palette, setPalette] = useState([]);

  const modelId = 'eeed0b6733a644cea07cf4c60f87ebb7';

  const app = new Clarifai.App({
    apiKey: '50813a3a6f6a447d9d2853ebba96a18b',
  });

  async function getPalette() {
    let response = await app.models.predict(modelId, imageUrl);
    let colors = response.outputs[0].data.colors;
    let palette = [];

    for (let i = 0; i < colors.length; i++) {
      palette.push(colors[i].raw_hex);
    }
    console.log(palette);
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

  return (
    <div className={'cardWrapper'}>

    </div>
  );
};
