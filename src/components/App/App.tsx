import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';

import './App.css';
import { TitleBar } from '../TitleBar/TitleBar';
import { useFirestore } from '../../hooks/useFirestore';
import { Palette } from '../Palette/Palette';
import { HeroImage } from '../HeroImage/HeroImage';

function App() {
  firebase.analytics().logEvent('app_start');

  const { documents } = useFirestore('images');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (documents.length > 0) {
      setImage(documents[0].url);
    }
  }, [documents, setImage]);

  const movieInfo = (
    <>
      <p className={'info-1'}>Directed by Wes Anderson</p>
      <p className={'info-2'}>
        Cinematograpy by Robert D. Yeoman. Art direction by Stephan O. Gessler
        and Gerald Sullivan.
      </p>
    </>
  );

  const footerInfo = (
    <>
      <p className={'footer'}>
        Inspired by&nbsp;
        <a href={'https://www.instagram.com/filmandcolor/?hl=en'}>
          Film and Color
        </a>
        .&nbsp;Made by&nbsp;
        <a href={'https://twitter.com/david_dossett'}>me</a>
      </p>
    </>
  );

  return (
    <div className={'grid-container'}>
      <div className={'grid'}>
        <TitleBar className={'titlebar'} />
        <Palette className={'palette'} image={image} />
        {movieInfo}
        <HeroImage className={'image'} imageUrl={image} />
        {footerInfo}
      </div>
    </div>
  );
}

export default App;
