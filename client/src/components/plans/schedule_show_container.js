import { connect } from "react-redux";
import ScheduleShow from "./schedule_show";

const mapStateToProps = (state) => ({
  attractions: state.entities.attractions,
});

export default connect(
  mapStateToProps
)(ScheduleShow);
