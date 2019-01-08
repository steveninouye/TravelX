import React from "react";
import ReactDom from "react-dom";
import favicon from "./img/favicon.png";

import axios from "axios";
window.axios = axios;

// import { install } from "@material-ui/core/styles";
// install();

import Root from "./components/Root";
import { setCurrentUser } from "./utils/set_current_user";

// TESTING
import configureStore from './reducers/root_reducer';
import { login } from './actions/session_actions';
import { getAttractionDetails } from './actions/places_actions';
import { getRandCityItinerary, getItinerary, getItineraries } from './actions/itinerary_actions';
//

document.addEventListener('DOMContentLoaded', () => {
   // TESTING
   let store = configureStore();
   window.getState = store.getState;
   window.dispatch = store.dispatch;
   window.store = store;
   window.login = login;
   window.getAttractionDetails = getAttractionDetails
   window.getRandCityItinerary = getRandCityItinerary
   window.getItinerary = getItinerary
   window.getItineraries = getItineraries
   //


  ReactDom.render(
    <Root store={setCurrentUser()} />,
    document.getElementById("root")
  );
});
