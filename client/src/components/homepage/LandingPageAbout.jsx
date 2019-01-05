import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import team1 from "../../img/team/micah.jpeg";
import team2 from "../../img/team/steven.jpeg";
import team3 from "../../img/team/taran.jpeg";
import team4 from "../../img/team/josh.jpeg";

const styles = theme => ({
  teamPhotosContainer: {
    display: "flex",
    justifyContent: "space-around"
  },
  teamPhoto: {
    height: "250px"
  },
  aboutText: {
    padding: "20px"
  }
});

const LandingPageAbout = ({ classes }) => {
  return (
    <section>
      <Typography variant="h2" gutterBottom align="center">
        About the project
      </Typography>
      <div className={classes.teamPhotosContainer}>
        <img className={classes.teamPhoto} src={team1} alt="" />
        <img className={classes.teamPhoto} src={team2} alt="" />
        <img className={classes.teamPhoto} src={team3} alt="" />
        <img className={classes.teamPhoto} src={team4} alt="" />
      </div>
      <Typography
        variant="body1"
        gutterBottom
        align="center"
        className={classes.aboutText}
      >
        This project was created by a team of software developers at App
        Academy, the #1 coding bootcamp with a 3% acceptance rate. Icons or
        links here
      </Typography>
    </section>
  );
};

export default withStyles(styles)(LandingPageAbout);
