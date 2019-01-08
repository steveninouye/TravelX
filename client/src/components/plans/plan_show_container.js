import {
  connect
} from "react-redux";
import {
  getRandCityItinerary
} from "../../actions/itinerary_actions";
import PlanShow from "./plan_show";
import {
  selectCity
} from "../../reducers/selectors";

// const cities = ['Paris', 'London', 'Buenos Aires', 'Tokyo', 'Singapore']
// const city = cities[Math.floor(Math.random() * cities.length)];

const mapStateToProps = (state, ownProps) => {

  const planId = ownProps.match.params.planId;
  // let city = {
  //   name: null,
  //   photos: []
  // };
  // if (state.entities.itineraries[planId]) {
  //   city = state.entities.itineraries[planId].attractions[0].city
  // }
  const city = selectCity(state.entities, planId);

  return {
    city,
    planId
  }
};

const mapDispatchToProps = dispatch => ({
  getRandCityItinerary: (city) => dispatch(getRandCityItinerary(city))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanShow);