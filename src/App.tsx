import React from 'react';
import Clarifai from 'clarifai';

import './App.css';
import { HeroImage } from './components/HeroImage/HeroImage';
import { PaletteView } from './components/PaletteView/PaletteView';

const selectedImage = 'https://wallpapercave.com/wp/wp4628469.jpg';
const modelId = 'eeed0b6733a644cea07cf4c60f87ebb7';

const app = new Clarifai.App({
  apiKey: '50813a3a6f6a447d9d2853ebba96a18b'
 });

async function getPalette(model: string, image: string): Promise<String> {
  let response = await app.models.predict(model, image);
  let colors = await response.outputs[0].data.colors;
  const generatedPalette: any = [];
  
  for (let i = 0; i < colors.length; i++) {
    generatedPalette.push(colors[i].raw_hex);
  }
  return generatedPalette;
}

const palette = getPalette(modelId, selectedImage);

function App() {
  return (
    <div className={'wrapper'}>
      <HeroImage />
      <PaletteView palette={palette} />
    </div>
  );
}

export default App;
