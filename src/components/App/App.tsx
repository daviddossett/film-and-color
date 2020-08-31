import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';

import './App.css';
import { TitleBar } from '../TitleBar/TitleBar';
import { useFirestore } from '../../hooks/useFirestore';
import { Footer } from '../Footer/Footer';
import { ImageWithPalette } from '../ImageWithPalette/ImageWithPalette';

function App() {
  firebase.analytics().logEvent('app_start');

  const { documents } = useFirestore('images');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (documents.length > 0) {
      setImage(documents[0].url);
    }
  }, [documents, setImage]);

  return (
    <div className={'appRoot'}>
      <TitleBar />
      <ImageWithPalette image={image} />
      <Footer />
    </div>
  );
}

export default App;
