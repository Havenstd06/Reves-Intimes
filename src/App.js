/*
 * Copyright (©) 2021-2021 Thomas Drumont
 */

import React, {useEffect} from "react";
import {
  Switch,
  Route,
} from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from "./Pages/Home";

function App() {

    useEffect(() => {
        AOS.init({
            once: true,
            disable: 'phone',
            duration: 700,
            easing: 'ease-out-cubic',
        });
    });

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
