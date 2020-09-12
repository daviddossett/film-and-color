import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';

import './App.css';
import { TitleBar } from '../TitleBar/TitleBar';
import { useFirestore } from '../../hooks/useFirestore';
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
    <div className={'grid-container'}>
      <div className={'grid'}>
        <TitleBar className={'titlebar'} />
        <p className={'info-1'}>Directed by Wes Anderson</p>
        <p className={'info-2'}>Cinematograpy by Robert D. Yeoman</p>
        <p className={'info-3'}>
          Art direction by Stephan O. Gessler and Gerald Sullivan
        </p>
        <p className={'info-4'}>Set decoration by Anna Pinnock</p>
        <p className={'info-5'}>Shot on 35mm film with Zeiss lenses</p>
        <ImageWithPalette image={image} className={'image-with-palette'} />
        <p className={'footer-1'}>
          Inspired by&nbsp;
          <a href={'https://www.instagram.com/filmandcolor/?hl=en'}>
            Film and Color
          </a>
        </p>
        <p className={'footer-2'}>
          Made by&nbsp;
          <a href={'https://twitter.com/david_dossett'}>me</a>
        </p>
      </div>
    </div>
  );
}

export default App;
