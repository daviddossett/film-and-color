import React from 'react';
import './App.css';
import { HeroImage } from './components/HeroImage/HeroImage';
import { PaletteView } from './components/PaletteView/PaletteView';

function App() {
  return (
    <div className={'wrapper'}>
      <HeroImage className={'heroImage'} imageUrl={'someurl'}/>
      <PaletteView className={'paletteView'}/>
    </div>
  );
}

export default App;
