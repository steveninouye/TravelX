import React from "react";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardContent";

import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import { withStyles } from "@material-ui/core/styles";

import AttractionRating from "../plans/AttractionRating";

const styles = theme => ({
  infoCard: {
    width: "600px",
    position: "relative",
    bottom: "170px",
    left: "70px"
    // transformOrigin: "bottom left",
    // transform: "translate(30px, -146px)"
  },
  closeButton: {
    position: "relative",
    bottom: "-5px",
    left: "89%",
    padding: "0px"
  },
  photo: {
    width: "50%",
    objectFit: "none"
  },
  container: {
    display: "flex"
  },
  imgContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around"
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
      <div className={classes.container}>
        <div className={classes.imgContainer}>
          <img
            src={`api/places/photo/${attraction.photos[0].photo_reference}`}
            title="attraction photo"
            className={classes.photo}
          />
        </div>
        <div className={classes.textContainer}>
          <CardContent>
            <Typography variant="h4">{name}</Typography>
            <AttractionRating attraction={attraction} />
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default withStyles(styles)(MapMarkerInfoCard);
