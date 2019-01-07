import { connect } from "react-redux";
import { getRandCityItinerary } from "../../actions/itinerary_actions";
import PlanShow from "./plan_show";

const cities = ['Paris', 'London', 'Buenos Aires', 'Tokyo', 'Singapore']
const city = cities[Math.floor(Math.random() * cities.length)];

const mapStateToProps = (state, ownProps) => ({
  city: city,
  plans: state.entities.plans,
  planId: ownProps.match.params.planId
});

const mapDispatchToProps = dispatch => ({
  getRandCityItinerary: (city) => dispatch(getRandCityItinerary(city))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanShow);
 