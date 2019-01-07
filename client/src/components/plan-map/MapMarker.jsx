import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  markerIcon: {
    fontSize: "40px",
    cursor: "pointer",
    color: theme.palette.primary.main
  },
  selected: {
    color: theme.palette.secondary.main
  }
});

const MapMarker = ({ lat, lng, id, selected, classes, clickHandler }) => {
  let className = classes.markerIcon;
  if (selected) {
    className += ` ${classes.selected}`;
  }

  return (
    <FontAwesomeIcon
      icon={faMapMarkerAlt}
      lat={lat}
      lng={lng}
      className={className}
      onClick={clickHandler}
      id={id}
    />
  );
};

export default withStyles(styles)(MapMarker);
