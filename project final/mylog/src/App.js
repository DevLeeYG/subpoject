import React from 'react';

import Nav from './Components/Nav';
import './App.css';

import Home from './Components/Home';
import Padding from './Components/Padding';
import NavPad from './Components/NavPad';
import Brand from './Components/Brand';

const App = () => {
  return (
    <div>
      <Nav />

      <Padding />
      <NavPad />
      <Home />
      <Brand />
    </div>
  );
};

export default App;
