import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import team1 from "../../img/team/micah.jpeg";
import team2 from "../../img/team/steven.jpeg";
import team3 from "../../img/team/taran.jpeg";
import team4 from "../../img/team/josh.jpeg";

const styles = theme => ({
  contentContainer: {
    width: "50%",
    margin: "0 auto"
  },
  teamPhotosContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "50%"
  },
  header: {
    marginTop: "35px",
    marginBottom: "40px"
  },
  teamFeatureContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  teamPhoto: {
    height: "170px"
  },
  teamName: {
    fontSize: "24px",
    margin: "10px 0"
  },
  aboutText: {
    padding: "20px",
    fontSize: "20px"
  }
});

const LandingPageAbout = ({ classes }) => {
  return (
    <section>
      <div className={classes.contentContainer}>
        <Typography
          variant="h2"
          gutterBottom
          align="center"
          className={classes.header}
        >
          About the project
        </Typography>
        <div className={classes.teamPhotosContainer}>
          <div className={classes.teamFeatureContainer}>
            <img className={classes.teamPhoto} src={team1} alt="" />
            <Typography
              variant="body1"
              gutterBottom
              align="center"
              className={classes.teamName}
            >
              Micah Jaffe
            </Typography>
          </div>
          <div className={classes.teamFeatureContainer}>
            <img className={classes.teamPhoto} src={team2} alt="" />
            <Typography
              variant="body1"
              gutterBottom
              align="center"
              className={classes.teamName}
            >
              Steven Inouye
            </Typography>
          </div>
          <div className={classes.teamFeatureContainer}>
            <img className={classes.teamPhoto} src={team3} alt="" />
            <Typography
              variant="body1"
              gutterBottom
              align="center"
              className={classes.teamName}
            >
              Taran Cachaco
            </Typography>
          </div>
          <div className={classes.teamFeatureContainer}>
            <img className={classes.teamPhoto} src={team4} alt="" />
            <Typography
              variant="body1"
              gutterBottom
              align="center"
              className={classes.teamName}
            >
              Josh Stroud
            </Typography>
          </div>
        </div>
        <Typography
          variant="body1"
          gutterBottom
          align="center"
          className={classes.aboutText}
        >
          This project was created by a team of software developers at{" "}
          <a href="http://appacademy.io">App Academy</a>, the #1 coding bootcamp
          with a 3% acceptance rate.
        </Typography>
      </div>
    </section>
  );
};

export default withStyles(styles)(LandingPageAbout);
