import React from 'react';

import './App.css';
import { ImageWithPalette } from '../ImageWithPalette/ImageWithPalette';

const imagesWithMetaData = [
  {
    url: 'https://images4.alphacoders.com/597/thumb-1920-597547.jpg',
    title: 'The Grand Budapest Hotel',
    ariaLabel: 'A still frame from The Grand Budapest Hotel',
    key: 0,
  },
  {
    url:
      'https://cdn.onebauer.media/one/empire-tmdb/films/153/images/iJP2ogeM5YpZyUOkmCiZ5UXWyBf.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg',
    title: 'Lost In Translation',
    ariaLabel: 'A still frame from Lost in Translation',
    key: 1,
  },
  {
    url: 'https://anotherimg-dazedgroup.netdna-ssl.com/900/azure/another-prod/390/7/397925.jpg',
    title: 'Hotel Chevalier',
    ariaLabel: 'A still frame from Hotel Chevalier',
    key: 2,
  },
];

// Hardcoded the image for now
const image = imagesWithMetaData[0].url;
const title = imagesWithMetaData[0].title;
const ariaLabel = imagesWithMetaData[0].ariaLabel;

function App() {
  return (
    <div className={'rootWrapper'}>
      <ImageWithPalette image={image} title={title} ariaLabel={ariaLabel} />
    </div>
  );
}

export default App;
