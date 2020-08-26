import React from 'react';
import * as firebase from 'firebase';

import './App.css';
import { TitleBar } from '../TitleBar/TitleBar';
import { HeroImage } from '../HeroImage/HeroImage';
import { useFirestore } from '../../hooks/useFirestore';

function App() {
  firebase.analytics().logEvent('app_start');
  const { documents: images } = useFirestore('images');

  return (
    <div className={'appRoot'}>
      <div>
        <TitleBar />
        {images.length > 0 && <HeroImage image={images[0].url} />}
      </div>
    </div>
  );
}

export default App;
