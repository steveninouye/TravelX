import { connect } from "react-redux";
import ScheduleShow from "./schedule_show";
import 

const mapStateToProps = state => ({
  attractions: state.entities.attractions
});

const mapDispatchToProps = dispatch => ({
  fetchAttractionDetail: 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduleShow);
