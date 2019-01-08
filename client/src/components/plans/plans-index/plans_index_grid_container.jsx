import { connect } from "react-redux";
import PlansIndexGrid from "./plans_index_grid";
import { getItineraries } from "../../../actions/itinerary_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => ({
  itineraries: state.entities.itineraries,
  history: ownProps.history
});

const mapDispatchToProps = dispatch => ({
  getItineraries: () => dispatch(getItineraries())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PlansIndexGrid));
