import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
});

class GridCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // const { classes, plan.attractions[0].city.photos[0] } = this.props;
    
    return <React.Fragment>
        <Card className={classes.card}>
        <CardMedia className={classes.cardMedia} image={`${plan.attractions[0].city.photos[0]}`} title="Image title" />
          <CardContent className={classes.cardContent}>
            <Typography color="textPrimary" gutterBottom variant="h5" component="h2">
              8 days in Cusco
            </Typography>
            <Typography color="textPrimary">
              Machu Picchu, one of the New 7 Wonders of the World, is a
              hidden gem that is the pride of Peru. Nestled within the
              Urubamba River valley, it houses what once was a bustling
              center of royal and religious activity of the famed Incan
              Empire.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              View
            </Button>
            <Button size="small" color="primary">
              Edit
            </Button>
          </CardActions>
        </Card>
      </React.Fragment>;
  }
}

export default withStyles(styles)(GridCard);
// Get request api/itineraries
// Make a POST request to
// Whoever's logged in 