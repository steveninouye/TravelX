import React, { Component } from "react";
import StarRatings from "react-star-ratings";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  ratingContainer: {
    display: "inline-flex"
  },
  rating: {
    fontSize: "25px",
    fontWeight: "500",
    lineHeight: "35px",
    marginLeft: "15px"
  }
});
class AttractionRating extends Component {
  render() {
    const { classes, attraction } = this.props;

    return (
      <div className={classes.ratingContainer}>
        <StarRatings
          rating={attraction.rating}
          starRatedColor="black"
          numberOfStars={5}
          starDimension="30px"
          starSpacing="5px"
        />

        <Typography color="textPrimary" className={classes.rating}>{attraction.rating}</Typography>
      </div>
    );
  }
}

export default withStyles(styles)(AttractionRating);
