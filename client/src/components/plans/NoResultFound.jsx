import React from "react";
import NoResultFoundHero from "./NoResultFoundHero";
import NavBar from "./navbar";
import ThemeProvider from "../ThemeProvider";

class PlanShow extends React.Component {
  render() {
    const city = {
      photos: [
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
      ],
      name: "No Result Found"
    };

    return (
      <div>
        <NavBar />
        <NoResultFoundHero city={city} />
        ''
      </div>
    );
  }
};

export default ThemeProvider(PlanShow);
 