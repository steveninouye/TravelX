import { connect } from "react-redux";
import PlanShowNavBar from "./plan_show_nav_bar";
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({ session }) => ({
  session
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanShowNavBar);
