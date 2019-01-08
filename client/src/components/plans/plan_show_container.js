import {
  connect
} from "react-redux";
import {
  getRandCityItinerary,
  getItinerary
} from "../../actions/itinerary_actions";
import PlanShow from "./plan_show";
import {
  selectCity
} from "../../reducers/selectors";
import ThemeProvider from "../ThemeProvider";

const mapStateToProps = (state, ownProps) => {

  const planId = ownProps.match.params.planId;
  const city = selectCity(state.entities, planId);

  return {
    city,
    planId
  }
};

const mapDispatchToProps = dispatch => ({
  getRandCityItinerary: (city) => dispatch(getRandCityItinerary(city)),
  getItinerary: (id) => dispatch(getItinerary(id))
});

export default ThemeProvider(connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanShow));