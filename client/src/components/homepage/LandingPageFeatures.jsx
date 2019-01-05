import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import feature1 from "../../img/features/map-icon.png";
import feature2 from "../../img/features/attraction-icon.png";
import feature3 from "../../img/features/calendar-icon.png";
import feature4 from "../../img/features/trip-icon.png";

const LandingPageFeatures = () => {
  return (
    <section>
      <Grid container spacing={16} justify="center">
        <Grid item>
          <img src={feature1} alt="" />
        </Grid>
        <Grid item>
          <Typography component="h3" color="textPrimary">
            Choose a destination
          </Typography>
        </Grid>
        <Grid item>
          <img src={feature2} alt="" />
        </Grid>
        <Grid item>
          <Typography component="h3" color="textPrimary">
            Discover exciting attractions
          </Typography>
        </Grid>
        <Grid item>
          <img src={feature3} alt="" />
        </Grid>
        <Grid item>
          <Typography component="h3" color="textPrimary">
            Create a day-by-day plan
          </Typography>
        </Grid>
        <Grid item>
          <img src={feature4} alt="" />
        </Grid>
        <Grid item>
          <Typography component="h3" color="textPrimary">
            Book your trip
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
};

export default LandingPageFeatures;
