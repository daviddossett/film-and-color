import React from 'react';
import './App.css';
import { HeroImage } from './components/HeroImage/HeroImage';
import { PaletteView } from './components/PaletteView/PaletteView';

const palette: string[] = ['#070105', '#26252A', '#323329', '#544444', '#69686B', '#5D5A5D', '#787A81', '#928EAA', '#B5B0C6', '#696A7B', '#58595D', '#87858F'];

function App() {
  return (
    <div className={'wrapper'}>
      <HeroImage />
      <PaletteView palette={palette} />
    </div>
  );
}

export default App;
