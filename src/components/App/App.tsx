import React from 'react';

import './App.css';
import { HeroImage } from '../HeroImage/HeroImage';
import { Palette } from '../Palette/Palette';

const image = 'https://www.itl.cat/pngfile/big/189-1897904_her-2013.jpg';

function App() {
  return (
    <div className={'grid'}>
      <header>
        <div className={'circles'}>
          <div className={'circle1'} />
          <div className={'circle2'} />
          <div className={'circle3'} />
        </div>
        <h1 className={'title'}>Film and color</h1>
        <p className={'subtitle'}>Inspired by <a href={'https://www.instagram.com/filmandcolor/?hl=en'} target="blank">@filmandcolor</a></p>
      </header>
      <HeroImage className={'image'} imageUrl={image} />
      <Palette className={'palette'} image={image} />
    </div>
  );
}

export default App;
