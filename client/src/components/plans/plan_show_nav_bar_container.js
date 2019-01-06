import { connect } from "react-redux";
import PlanShowNavBar from "./plan_show_nav_bar";
import { openModal } from '../../actions/modal_actions';
import { selectPlan } from '../../reducers/selectors';
import { fetchPlan } from "../../actions/plan_actions";

const mapStateToProps = (state) => ({
  planId: parseInt(match.params.planId),
  plan: selectPlan(state.entities, planId),
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  fetchPlan: (id) => dispatch(fetchPlan(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanShowNavBar);
