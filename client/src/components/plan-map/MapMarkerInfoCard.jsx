import React from "react";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardContent";

import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  infoCard: {
    width: "300px",
    position: "relative",
    bottom: "170px",
    left: "20px"
  },
  closeButton: {
    position: "relative",
    bottom: "-5px",
    left: "89%",
    padding: "0px"
  }
});

const MapMarkerInfoCard = ({ attraction, classes, closeHandler }) => {
  const { lat, lng } = attraction.geometry.location;

  const { name } = attraction;
  return (
    <Card lat={lat} lng={lng} className={classes.infoCard}>
      {/* <CardHeader
        action={
          <IconButton className={classes.closeButton}>
            <CloseIcon />
          </IconButton>
        }
      /> */}
      <IconButton className={classes.closeButton} onClick={closeHandler}>
        <CloseIcon />
      </IconButton>
      <CardContent>
        <Typography variant="h4">{name}</Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(MapMarkerInfoCard);
