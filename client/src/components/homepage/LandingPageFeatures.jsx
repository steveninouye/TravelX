import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import feature1 from "../../img/features/map-icon.png";
import feature2 from "../../img/features/attraction-icon.png";
import feature3 from "../../img/features/calendar-icon.png";
import feature4 from "../../img/features/trip-icon.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faArrowAltSquareRight,
  faArrowSquareRight,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    // background: theme.palette.primary.dark,
    // background: theme.palette.primary.main,
    background: theme.palette.common.white,
    paddingBottom: "30px"
  },
  header: {
    padding: "30px",
    paddingBottom: "35px"
  },
  featuresContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "75%",
    margin: "0 auto"
  },
  featureElement: {
    margin: "0 5px"
  },
  featureItemContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  featureImage: {
    width: "130px"
  },
  arrowIcon: {
    fontSize: "45px",
    color: theme.palette.secondary.main
  },
  featureText: {
    fontSize: "22px"
  }
});

const LandingPageFeatures = ({ classes }) => {
  return (
    <section className={classes.container}>
      <Typography
        variant="h2"
        color="textPrimary"
        align="center"
        className={classes.header}
      >
        Plan a trip in one click
      </Typography>
      <div className={classes.featuresContainer}>
        <div
          className={`${classes.featureItemContainer} ${
            classes.featureElement
          }`}
        >
          <img className={classes.featureImage} src={feature1} alt="" />

          <Typography
            variant="body1"
            color="textPrimary"
            className={`${classes.featureText} ${classes.featureElement}`}
            align="center"
          >
            Choose a destination
          </Typography>
        </div>
        <FontAwesomeIcon icon={faArrowRight} className={classes.arrowIcon} />
        <div
          className={`${classes.featureItemContainer} ${
            classes.featureElement
          }`}
        >
          <img className={classes.featureImage} src={feature2} alt="" />
          <Typography
            variant="body1"
            color="textPrimary"
            className={`${classes.featureText} ${classes.featureElement}`}
            align="center"
          >
            Discover exciting attractions
          </Typography>
        </div>
        <FontAwesomeIcon icon={faArrowRight} className={classes.arrowIcon} />

        <div
          className={`${classes.featureItemContainer} ${
            classes.featureElement
          }`}
        >
          <img className={classes.featureImage} src={feature3} alt="" />
          <Typography
            variant="body1"
            color="textPrimary"
            className={`${classes.featureText} ${classes.featureElement}`}
            align="center"
          >
            Create a day-by-day plan
          </Typography>
        </div>
        <FontAwesomeIcon icon={faArrowRight} className={classes.arrowIcon} />

        <div
          className={`${classes.featureItemContainer} ${
            classes.featureElement
          }`}
        >
          <img className={classes.featureImage} src={feature4} alt="" />
          <Typography
            variant="body1"
            color="textPrimary"
            className={`${classes.featureText} ${classes.featureElement}`}
            align="center"
          >
            Book your trip
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default withStyles(styles)(LandingPageFeatures);
