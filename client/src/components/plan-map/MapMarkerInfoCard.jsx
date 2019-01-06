import React from "react";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  infoCard: {
    width: "300px",
    position: "relative",
    bottom: "170px",
    left: "20px"
  }
});

const MapMarkerInfoCard = ({ attraction, classes }) => {
  const { lat, lng } = attraction.geometry.location;

  const { name } = attraction;
  return (
    <Card lat={lat} lng={lng} className={classes.infoCard}>
      <CardContent>
        <Typography variant="h4">{name}</Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(MapMarkerInfoCard);
