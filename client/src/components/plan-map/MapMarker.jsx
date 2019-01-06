import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  markerIcon: {
    textSize: "40px",
    cursor: "pointer"
  }
});

const MapMarker = ({ lat, lng, id, classes }) => {
  return (
    <FontAwesomeIcon
      icon={faMapMarkerAlt}
      lat={lat}
      lng={lng}
      className={classes.markerIcon}
      id={id}
    />
  );
};

export default withStyles(styles)(MapMarker);
