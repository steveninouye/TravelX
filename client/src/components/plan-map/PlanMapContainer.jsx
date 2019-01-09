import { connect } from "react-redux";
import { fetchPlan } from "../../actions/plan_actions";
import PlanMap from "./PlanMap";
import { withRouter } from "react-router-dom";
import { fetchGoogleApiKey } from "../../actions/plan_actions";

const mapStateToProps = (state, ownProps) => {
  const planId = ownProps.match.params.planId;

  const apiKey = state.entities.itineraries.googleApiKey;
  debugger;
  return {
    itinerary: state.entities.itineraries[planId],
    planId: ownProps.match.params.planId,
    apiKey
  };
};
const mapDispatchToProps = dispatch => ({
  fetchPlan: () => dispatch(fetchPlan()),
  fetchGoogleApiKey: () => dispatch(fetchGoogleApiKey())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PlanMap)
);
