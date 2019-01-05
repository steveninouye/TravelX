import React from 'react';
import Button from "@material-ui/core/Button";

export default class PlanShow extends React.Component {
  componentDidMount() {
    // this.props.fetchPlan(this.props.planId)
  }

  render() {
    return (
      <div>
        <div>Nav Bar Placeholder</div>
        <img src="https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415__340.jpg" alt=""/>
        <div>Schedule/Map Placeholder</div>
        <Button 
          color="primary"
          variant="contained"
        >
          Save
        </Button>
        <Button
          color="primary"
          variant="contained"
        >
          New Plan
        </Button>
      </div>
    );
  }
};