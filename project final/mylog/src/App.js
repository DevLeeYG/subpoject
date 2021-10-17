import React from 'react';

import Nav from './Components/Nav';
import './App.css';

import Home from './Components/Home';
import Padding from './Components/Padding';
import NavPad from './Components/NavPad';
import Brand from './Components/Brand';
import SimpleSlider from './Components/SimpleSlider';

const App = () => {
  return (
    <div>
      <Nav />

      <Padding />
      <NavPad />
      <Home />
      <Brand />
      {/* <SimpleSlider /> */}
    </div>
  );
};

export default App;
