import React from "react"; 
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import ScheduleShowContainer from "./schedule_show_container";
import LoginFormContainer from "../session/login_form_container";
import PlanMapContainer from "../plan-map/PlanMapContainer";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "33%",
    padding: "0"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  button: {
    width: "42%"
  }
});

class PlanShowNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleNewPlan = this.handleNewPlan.bind(this);
  }

  handleChange(event, value) {
    this.setState({ value });
  }

  handleSaveClick() {
    const { session, saveItinerary, openModal, planId, history } = this.props;

    if (session) {
      saveItinerary(planId).then(history.push('/plans'))
    } else {
      openModal("login");
    }
  }

  handleNewPlan() {
    const { getRandCityItinerary, city } = this.props;
    
    getRandCityItinerary(city.name).then(
      res => this.props.history.push(`/plans/${res.itinerary._id}`)
    );
  }

  render() {
    const { classes, saveItinerary, planId, history } = this.props;
    const { value } = this.state;
    const saveCallback = () => 
      saveItinerary(planId).then(history.push('/plans'));

    return (
      <div className={classes.root}>
        <LoginFormContainer saveCallback={saveCallback}/>

        <AppBar 
          position="sticky"
          color="secondary"
        >
          <Toolbar className={classes.toolbar}>
            <Tabs 
              value={value} 
              onChange={this.handleChange}
              indicatorColor="primary"
            >
              <Tab label="Schedule" />
              <Tab label="Map" />
            </Tabs>
            <Toolbar className={classes.buttonContainer}>
              <Button
                onClick={this.handleSaveClick}
                color="primary"
                variant="contained"
                className={classes.button}
              >
                Save
              </Button>
              <Button
                onClick={this.handleNewPlan}
                color="primary"
                variant="contained"
                className={classes.button}
              >
                New Plan
              </Button>
            </Toolbar>
          </Toolbar>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <ScheduleShowContainer />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <PlanMapContainer />
          </TabContainer>
        )}
      </div>
    );
  }
}

PlanShowNavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PlanShowNavBar);
