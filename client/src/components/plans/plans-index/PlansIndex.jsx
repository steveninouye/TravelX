import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

// MUI stuff
import NavBar from "../navbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import PlansIndexGridContainer from "./plans_index_grid_container"
import Grid from "@material-ui/core/Grid";
import ThemeProvider from "../../ThemeProvider";



const styles = theme => ({
  appBar: {
    position: "absolute",
  },
  toolBar: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between'
  },
  header: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  CreateNewPlanButton: {
    marginTop: theme.spacing.unit * 4
  },
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
  },
});

class Plan extends React.Component{
  constructor(props){
    super(props)

    this.handleRedirectToSplash = this.handleRedirectToSplash.bind(this);
  }

  componentDidMount() {
    document.title = "TravelX | My Plans"
  }

  handleRedirectToSplash() {
    this.props.history.push('/');
  }
  
  render() {
    const { classes } = this.props;
    
    return (
      // REACT FRAGMENT IS WAY BETTER THAN DIV
      <React.Fragment> 
        <NavBar/>
        {/* Start of header */}
        <article>
          <div>
            <div className={classes.header}>
              <Typography color="textPrimary"
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                My Plans
              </Typography>
  
              <div className={classes.CreateNewPlanButton}>
                <Grid container spacing={16} justify="center">
                  <Grid item>
                    <Button onClick={this.handleRedirectToSplash} variant="contained" color="primary">
                      Create a New Plan
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
          {/* End of header */}
  
          {/* Start of the card grid */}
          <PlansIndexGridContainer/>
        </article>
        {/* End of card grid */}
      </React.Fragment>
    );
  }
}

Plan.propTypes = {
  classes: PropTypes.object.isRequired
};

export default ThemeProvider(withStyles(styles)(Plan));