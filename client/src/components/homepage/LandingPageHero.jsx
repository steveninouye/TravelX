import React from "react";

import { withStyles } from "@material-ui/core/styles";

import landingPhoto from "../../img/backgrounds/city_at_dawn.jpg";
import { Link } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  background: {
    backgroundImage: `url(${landingPhoto})`,
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
  headerText: { color: "white" },
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
      destination: ""
    };
  }

  handleChange(name) {
    return event => {
      this.setState({ [name]: event.currentTarget.value });
    };
  }

  render() {
    return (
      <section className={this.props.classes.background}>
        {/* <Paper elevation={1} className={this.props.classes.paper}> */}
        <div className={this.props.classes.contentContainer}>
          <div className={this.props.classes.headerContainer}>
            <Typography
              className={this.props.classes.headerText}
              component="h3"
              variant="h1"
            >
              TravelX
            </Typography>
            <Typography className={this.props.classes.headerText} variant="h2">
              Discover your world
            </Typography>
          </div>
          <Paper elevation={1} className={this.props.classes.searchContainer}>
            <TextField
              className={this.props.classes.searchInput}
              label="Enter destination city"
              value={this.state.destination}
              onChange={this.handleChange("destination")}
            />
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/schedule"
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