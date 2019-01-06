import { connect } from "react-redux";
import PlanShowNavBar from "./plan_show_nav_bar";

const mapStateToProps = ({ session }) => ({
  session
});

export default connect(
  mapStateToProps
)(PlanShowNavBar);
