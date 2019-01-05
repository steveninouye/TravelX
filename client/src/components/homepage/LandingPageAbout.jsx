import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import team1 from "../../img/team/micah.jpeg";
import team2 from "../../img/team/steven.jpeg";
import team3 from "../../img/team/taran.jpeg";
import team4 from "../../img/team/josh.jpeg";

const LandingPageAbout = () => {
  return (
    <section>
      <Typography variant="h2" gutterBottom align="center">
        About the project
      </Typography>
      <Grid container spacing={16} justify="center">
        <Grid item>
          <img src={team1} alt="" />
        </Grid>
        <Grid item>
          <img src={team2} alt="" />
        </Grid>
        <Grid item>
          <img src={team3} alt="" />
        </Grid>
        <Grid item>
          <img src={team4} alt="" />
        </Grid>
      </Grid>
      <Typography variant="body1" gutterBottom align="center">
        This project was created by a team of software developers at App
        Academy, the #1 coding bootcamp with a 3% acceptance rate. Icons or
        links here
      </Typography>
    </section>
  );
};

export default LandingPageAbout;
