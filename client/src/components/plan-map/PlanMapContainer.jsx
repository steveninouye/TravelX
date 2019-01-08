import { connect } from "react-redux";
import { fetchPlan } from "../../actions/plan_actions";
import PlanMap from "./PlanMap";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  const planId = ownProps.match.params.planId;

  return {
    itinerary: state.entities.itineraries[planId],
    planId: ownProps.match.params.planId
  };
};
const mapDispatchToProps = dispatch => ({
  fetchPlan: () => dispatch(fetchPlan())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PlanMap)
);
