import React from "react";

import { withStyles } from "@material-ui/core/styles";

import landingPhoto from "../../img/backgrounds/mountains.jpeg";
// import landingPhoto from "../../img/backgrounds/city_at_dawn.jpg";
import { Link } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import getRandCityItinerary from "../../utils/itinerary_ajax_utils";
import { EBADF } from "constants";

const styles = theme => ({
  background: {
    // backgroundImage: `url(${landingPhoto})`,
    // height: "100vh",
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "-1320px -960px"
    background: `url(${landingPhoto}) no-repeat center center fixed`,
    backgroundSize: "cover",
    height: "100vh"
  },
  paper: {
    marginTop: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 10,
    marginLeft: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 10
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%"
  },
  headerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: { color: theme.palette.common.black },
  mainHeader: {
    fontSize: "92px"
  },
  tagline: {
    fontSize: "48px",
    padding: "10px",
    fontWeight: "200"
  },
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    margin: "10px auto",
    padding: "15px"
  },
  searchInput: {
    width: "70%",
    margin: "0 5px"
  }
});

class LandingPageHero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(name) {
    return event => {
      this.setState({ [name]: event.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const city = this.state.city;

    let that = this;
    this.props
      .getRandCityItinerary(city)
      .then(res => {
        this.props.history.push(`/plans/${res.itinerary._id}`);
      })
      .catch(err => {
        console.log("error");
        this.props.history.push(`/city-not-found`);
      });
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.handleSubmit(e);
    }
  }

  render() {
    return (
      <section className={this.props.classes.background}>
        {/* <Paper elevation={1} className={this.props.classes.paper}> */}
        <div className={this.props.classes.contentContainer}>
          <div className={this.props.classes.headerContainer}>
            <Typography
              className={`${this.props.classes.headerText} ${
                this.props.classes.mainHeader
              }`}
              component="h3"
              variant="h1"
            >
              TravelX
            </Typography>
            <Typography
              className={`${this.props.classes.headerText} ${
                this.props.classes.tagline
              }`}
              variant="h2"
            >
              Discover your world
            </Typography>
          </div>
          <Paper elevation={1} className={this.props.classes.searchContainer}>
            <TextField
              className={this.props.classes.searchInput}
              label="Enter destination city"
              value={this.state.city}
              onChange={this.handleChange("city")}
              onKeyPress={this.handleKeyPress}
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={this.handleSubmit}
            >
              See your plan
            </Button>
          </Paper>
        </div>
        {/* </Paper> */}
      </section>
    );
  }
}

export default withStyles(styles)(LandingPageHero);
