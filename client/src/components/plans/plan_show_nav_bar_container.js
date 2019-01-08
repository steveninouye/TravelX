import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import PlanShowNavBar from "./plan_show_nav_bar";
import { openModal } from '../../actions/modal_actions';
import { getRandCityItinerary } from "../../actions/itinerary_actions";
import { selectCity } from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
  const planId = ownProps.match.params.planId;
  const city = selectCity(state.entities, planId);
  const session = state.session;
  // Comment this out when there is a plans table up
  // const plan = selectPlan(state.entities, planId);
  
  return {
    city,
    planId,
    session
    // Comment this out when there is a plans table up
    // plan
  };
};

const mapDispatchToProps = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  getRandCityItinerary: (city) => dispatch(getRandCityItinerary(city))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanShowNavBar));
