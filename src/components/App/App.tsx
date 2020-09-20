import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';

import './App.css';
import { TitleBar } from '../TitleBar/TitleBar';
import { useFirestore } from '../../hooks/useFirestore';
import { Palette } from '../Palette/Palette';
import { HeroImage } from '../HeroImage/HeroImage';
import { Footer } from '../Footer/Footer';

function App() {
  firebase.analytics().logEvent('app_start');

  const { documents } = useFirestore('images');
  const [image, setImage] = useState('');
  const date = new Date().toDateString();

  useEffect(() => {
    if (documents.length > 0) {
      setImage(documents[0].url);
    }
  }, [documents, setImage]);

  return (
    <div className={'grid-container'}>
      <div className={'grid'}>
        <h1 className={'header'}>Film and Color</h1>
        <div className={'info'}>
          <p>{date}</p>
          <p>The Grand Budapest Hotel</p>
          <p>Art direction by Stephan Gellar</p>
        </div>
        <Palette className={'palette'} image={image} />
        <HeroImage className={'image'} imageUrl={image} />
        <Footer className={'footer'} />
      </div>
    </div>
  );
}

export default App;
