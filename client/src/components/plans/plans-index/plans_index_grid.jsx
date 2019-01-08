import React from 'react';
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridCard from "./plans_index_grid_item";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
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
  }
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


class PlansIndexGrid extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      itineraries: {
        itinerary_packages: []
      }
    }
  }

  componentDidMount() {
    const { getItineraries } = this.props;
    
    getItineraries()
      .then(res => 
        this.setState({itinerary_packages: res.itineraries.itinerary_packages })
        )
    console.log(this.state)
  }
  
  render() {
    const {classes, itineraries } = this.props;
    console.log(itineraries)
    if (!itineraries.itinerary_packages) {
      return <div>Loading...</div>
    } else {
      return <React.Fragment>
          <div className={classNames(classes.layout, classes.cardGrid)}>
            <Grid container spacing={40}>
              {itineraries.itinerary_packages.map((plan, idx) => (
                <Grid item key={idx} sm={6} md={6} lg={3}>
                  {/* <GridCard {plan.attractions[0].city.photos[0]} /> */}
                  <Card className={classes.card}>
                    {/* console.log(`${plan.attractions[0].city.photos[0]}`) */}
                    <CardMedia
                      className={classes.cardMedia}
                      // src={plan.attractions[0].city.photos[0]}
                      image={plan.attractions[0].city.photos[0]}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        8 days in Cusco
                      </Typography>
                      <Typography>
                        Machu Picchu, one of the New 7 Wonders of the
                        World, is a hidden gem that is the pride of Peru.
                        Nestled within the Urubamba River valley, it
                        houses what once was a bustling center of royal
                        and religious activity of the famed Incan Empire.
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
                </Grid>
              ))}
            </Grid>
          </div>
        </React.Fragment>;
    }
  }
}

PlansIndexGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PlansIndexGrid);