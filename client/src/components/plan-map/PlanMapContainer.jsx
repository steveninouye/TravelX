import { connect } from "react-redux";
import { fetchPlan } from "../../actions/plan_actions";
import PlanMap from "./PlanMap";

const mapStateToProps = (state, ownProps) => ({
  plans: state.entities.plans,
  attractions: state.entities.attractions,
  planId: ownProps.match.params.planId
});

const mapDispatchToProps = dispatch => ({
  fetchPlan: () => dispatch(fetchPlan())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanMap);
