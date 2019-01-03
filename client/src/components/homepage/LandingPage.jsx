import React, { Component } from "react";

import landingPhoto from "../../img/backgrounds/city_at_dawn.jpg";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div>Nav Bar</div>
        <section>
          <img src={landingPhoto} alt="" />
        </section>
        <section>
          <Grid container spacing={16} justify="center">
            <Grid item>
              <img src="" alt="" />
            </Grid>
            <Grid item>
              <Typography component="h3" color="textPrimary">
                Choose a destination
              </Typography>
            </Grid>
          </Grid>
        </section>
        <section>
          <Typography variant="h2" gutterBottom>
            h2. Heading
          </Typography>
          <div />
          <div />
          <div />
          <div />
        </section>
      </div>
    );
  }
}

export default LandingPage;
