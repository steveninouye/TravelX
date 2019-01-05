import React, { Component } from "react";

import ThemeProvider from "../ThemeProvider";

import LandingPageHero from "./LandingPageHero";
import LandingPageFeatures from "./LandingPageFeatures";
import LandingPageAbout from "./LandingPageAbout";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div>Nav Bar</div>
        <LandingPageHero />
        <LandingPageFeatures />
        <LandingPageAbout />
        <div>Footer</div>
      </div>
    );
  }
}

export default ThemeProvider(LandingPage);
