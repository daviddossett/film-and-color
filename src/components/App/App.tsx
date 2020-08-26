import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';

import './App.css';
import { TitleBar } from '../TitleBar/TitleBar';
import { HeroImage } from '../HeroImage/HeroImage';
import { useFirestore } from '../../hooks/useFirestore';
import { ImageDetailsWithPalette } from '../ImageDetailsWithPalette/ImagedDetailsWithPalette';

function App() {
  firebase.analytics().logEvent('app_start');
  const { documents } = useFirestore('images');

  const [image, setImage] = useState('');

  useEffect(() => {
    if (documents.length > 0) {
      setImage(documents[0].url);
    }
  }, [documents, setImage]);

  console.log(image);

  return (
    <div className={'appRoot'}>
      <div>
        <TitleBar />
        <HeroImage imageUrl={image} />
        <ImageDetailsWithPalette imageUrl={image} />
      </div>
    </div>
  );
}

export default App;
