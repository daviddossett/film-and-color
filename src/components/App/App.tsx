import React from 'react';
import * as firebase from 'firebase';

import { ImageWithPalette } from '../ImageWithPalette/ImageWithPalette';
import './App.css';
import { TitleBar } from '../TitleBar/TitleBar';

function App() {
  firebase.analytics().logEvent('app_start');

  return (
    <div className={'appRoot'}>
      <TitleBar />
      <div className={'contentArea'}>
        <ImageWithPalette className={'imageWrapper'} />
      </div>
    </div>
  );
}

export default App;
