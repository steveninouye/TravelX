import React, { Component } from "react";

import ThemeProvider from "../ThemeProvider";

import LandingPageHeroContainer from "./LandingPageHeroContainer";
import LandingPageFeatures from "./LandingPageFeatures";
import LandingPageAbout from "./LandingPageAbout";
import LandingPageImageGrid from "./LandingPageImageGrid";
import NavBar from "../plans/navbar";

class LandingPage extends Component {
  componentDidMount() {
    document.title = "TravelX";
  }

  render() {
    return (
      <div>
        <NavBar />
        <LandingPageHeroContainer />
        <LandingPageFeatures />
        <LandingPageImageGrid />
        <LandingPageAbout />
      </div>
    );
  }
}

export default ThemeProvider(LandingPage);
