import React, { useEffect, useState } from 'react';
import Clarifai from 'clarifai';

import './RootPage.css';
import { HeroImage } from '../HeroImage/HeroImage';
import { Palette } from '../Palette/Palette';

interface RootPageProps {}

const selectedImage = 'https://wallpapercave.com/wp/wp3535960.jpg';
const modelId = 'eeed0b6733a644cea07cf4c60f87ebb7';

const app = new Clarifai.App({
  apiKey: '50813a3a6f6a447d9d2853ebba96a18b',
});

async function getPalette() {
  let response = await app.models.predict(modelId, selectedImage);
  let colors = response.outputs[0].data.colors;
  let palette = [];

  for (let i = 0; i < colors.length; i++) {
    palette.push(colors[i].raw_hex);
  }
  console.log(palette);
  return palette;
}

export const RootPage: React.FC<RootPageProps> = () => {
  const [palette, setPalette] = useState([]);

  useEffect(() => {
    function handlePaletteUpdate(somePalette: any) {
      setPalette(somePalette);
    }
    getPalette().then(function (response) {
      handlePaletteUpdate(response);
    });
  }, []);

  return (
    <div className={'wrapper'}>
      <HeroImage image={selectedImage} />
      <Palette palette={palette} />
    </div>
  );
};
