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
    height: "100%",
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  }
});

class PlansIndexGrid extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      itineraries: {
        itinerary_packages: []
      }
    }

    this.handleCardView = this.handleCardView.bind(this);
  }

  componentDidMount() {
    const { getItineraries } = this.props;
    
    getItineraries()
      .then(res => 
        this.setState({itinerary_packages: res.itineraries.itinerary_packages })
        )
    console.log(this.state)
  }

  handleCardView(itineraryId) {
    this.props.history.push(`/plans/${itineraryId}`);
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
                      image={
                        plan.attractions[0].city.photos[
                          Math.floor(Math.random() * (10 - 1) + 1)
                        ]
                      }
                      title={
                        plan.attractions[0].city.name[0].toUpperCase() +
                        plan.attractions[0].city.name.slice(1)
                      }
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        {
                          [
                            "Quest to",
                            "Journey to",
                            "Escape to",
                            "A vacation in",
                            "Adventure to",
                            "Get lost in",
                            "Respite in",
                            "A fantasy in",
                            "Magic in",
                            "Find yourself in",
                            "Freedom in",
                            "One Night in"
                          ][Math.floor(Math.random() * (12 - 1) + 1)]
                        }{" "}
                        {plan.attractions[0].city.name[0].toUpperCase() +
                          plan.attractions[0].city.name.slice(1)}
                      </Typography>
                      <Typography />
                    </CardContent>
                    <CardActions>
                      {/* <Button onClick={this.handleCardView(plan._id)} size="small" color="primary">
                        View
                      </Button> */}
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