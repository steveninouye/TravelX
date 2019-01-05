import React from "react";

import landingPhoto from "../../img/backgrounds/city_at_dawn.jpg";
import { Link } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class LandingPageHero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      destination: ""
    };
  }

  handleChange(name) {
    return event => {
      this.setState({ [name]: event.currentTarget.value });
    };
  }

  render() {
    return (
      <section>
        <img src={landingPhoto} alt="" />
        <TextField
          label="Itinerary Planner"
          value={this.state.destination}
          onChange={this.handleChange("destination")}
        />
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/schedule"
        >
          See your plan
        </Button>
      </section>
    );
  }
}

export default LandingPageHero;
