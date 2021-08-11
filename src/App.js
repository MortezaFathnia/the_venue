import React, { Component } from "react";
import './resources/styles.css';
import { Element } from "react-scroll";

import Header from './components/header_footer/Header';
import Featured from "./components/featured/Index";
import VunueNfo from "./components/vunueNfo";
import Highlights from "./components/highlights";
import Pricing from "./components/pricing";
import Location from "./components/location";
import Footer from "./components/header_footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Element name="Featured">
          <Featured />
        </Element>

        <Element name="VenuenfO">
          <VunueNfo />
        </Element>

        <Element name="Highlights">
          <Highlights />
        </Element>

        <Element name="Pricing">
          <Pricing />
        </Element>

        <Element name="Location">
          <Location />
        </Element>

        <Footer />
      </div >
    );
  }
}

export default App;
