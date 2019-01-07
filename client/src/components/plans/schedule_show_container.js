import { connect } from "react-redux";
import ScheduleShow from "./schedule_show";
import { withRouter } from "react-router-dom";
import { selectItineraryAttractions } from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
  return {
    attractions: selectItineraryAttractions(state.entities, ownProps.match.params.planId)
}};

export default withRouter(connect(
  mapStateToProps
)(ScheduleShow));
