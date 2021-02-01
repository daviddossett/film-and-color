import React from 'react';

import './App.css';
import { HeroImage } from '../HeroImage/HeroImage';
import { Palette } from '../Palette/Palette';

const image = 'https://lukedowding.com/wp-content/uploads/BR2049-Wallpaper-StreetCleaner.png';

function App() {
  return (
    <div className={'grid'}>
      <header>
        <h1>Film and color</h1>
        <p>Inspired by <a href={'https://www.instagram.com/filmandcolor/?hl=en'} target="blank">@filmandcolor</a></p>
      </header>
      <HeroImage className={'image'} imageUrl={image} />
      <Palette className={'palette'} image={image} />
    </div>
  );
}

export default App;
