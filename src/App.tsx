import React from 'react';
import Clarifai from 'clarifai';

import './App.css';
import { HeroImage } from './components/HeroImage/HeroImage';
import { PaletteView } from './components/PaletteView/PaletteView';


const app = new Clarifai.App({
  apiKey: '50813a3a6f6a447d9d2853ebba96a18b'
 });

 const palette: string[] = [];

 app.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", 'https://wallpapercave.com/wp/wp4628469.jpg').then(
  function(response: any) {
    const colors = response.outputs[0].data.colors;
    for (let i = 0; i < colors.length; i++) {
      palette.push(colors[i].raw_hex);
      console.log(typeof(colors[i].raw_hex));
    }
  }
);

const palette2: string[] = ['#foo', '#barr'];
console.log(palette);
console.log(palette2);

function App() {
  return (
    <div className={'wrapper'}>
      <HeroImage />
      <PaletteView palette={palette} />
    </div>
  );
}

export default App;
