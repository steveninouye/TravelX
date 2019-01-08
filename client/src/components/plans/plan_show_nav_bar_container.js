import { connect } from "react-redux";
import ThemeProvider from "../ThemeProvider";
import { withRouter } from "react-router-dom"
import PlanShowNavBar from "./plan_show_nav_bar";
import { openModal } from '../../actions/modal_actions';
import { getRandCityItinerary, saveItinerary } from "../../actions/itinerary_actions";
import { selectCity } from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
  const planId = ownProps.match.params.planId;
  const city = selectCity(state.entities, planId);
  const session = state.session;
  
  return {
    city,
    planId,
    session
  };
};

const mapDispatchToProps = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  getRandCityItinerary: (city) => dispatch(getRandCityItinerary(city)),
  saveItinerary: (id) => dispatch(saveItinerary(id))
});

export default ThemeProvider(withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanShowNavBar)));
