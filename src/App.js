import React from 'react';
import './styles.css';

import Header from './components/Header.js';
import Grid from './components/Grid.js';
import Keyboard from './components/Keyboard.js';


export function App() {
  return (
    <div>
      <Header />
      <Grid />
      <Keyboard />
    </div>
  )
}