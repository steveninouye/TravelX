import { connect } from "react-redux";
import ScheduleItem from "./schedule_item";
import { getAttractionDetails } from "../../actions/places_actions";

const mapStateToProps = state => ({
  attractions: state.entities.attractions
});

const mapDispatchToProps = dispatch => ({
  getAttractionDetails: (attractionReferences) => dispatch(getAttractionDetails(attractionReferences)) 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduleItem);
