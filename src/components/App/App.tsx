import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import { RootPage } from '../RootPage/RootPage';

function App() {
  return (
    <BrowserRouter>
      <RootPage />
    </BrowserRouter>
  );
}

export default App;
