import React, { Component } from "react";
import { connect } from "react-redux";
import { getRandCityItinerary } from "../../actions/itinerary_actions";
import LandingPageImageGrid from "./LandingPageImageGrid";
import { withRouter } from "react-router-dom";

function mapStateToProps(state, ownProps) {
  return {
    history: ownProps.history
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getRandCityItinerary: city => dispatch(getRandCityItinerary(city))
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LandingPageImageGrid)
);
