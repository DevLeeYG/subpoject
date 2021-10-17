import React from 'react';

import Nav from './Components/Nav';
import './App.css';
import SingIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import Home from './Components/Home';
import Padding from './Components/Padding';
import NavPad from './Components/NavPad';
import Brand from './Components/Brand';

import BrandCover from './Components/BrandCover';
import Intro from './Components/Intro';
import IntroCover from './Components/IntroCover';
import Sponsor from './Components/Sponsor';
import Footer from './Components/Footer';
import { Route } from 'react-router';

const App = () => {
  return (
    <div>
      <Nav />
      <Route exact path="/">
        <Padding />
        <NavPad />

        <Home />
        <IntroCover />
        <Intro />
        <BrandCover />
        <Brand />
        <Sponsor />
        <Footer />
      </Route>
      <Route path="/login">
        <Padding />
        <SingIn />
      </Route>
      <Route path="/signup">
        <Padding />
        <SignUp />
      </Route>
    </div>
  );
};

export default App;
