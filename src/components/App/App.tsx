import React from 'react';

import './App.css';
import { HeroImage } from '../HeroImage/HeroImage';
import { Palette } from '../Palette/Palette';

const image = 'https://www.itl.cat/pngfile/big/189-1897904_her-2013.jpg';

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
