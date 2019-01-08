import { connect } from "react-redux";
import PlansIndexGrid from "./plans_index_grid";
import { getItineraries } from "../../../actions/itinerary_actions";

const mapStateToProps = state => ({
  itineraries: state.entities.itineraries
});

const mapDispatchToProps = dispatch => ({
  getItineraries: () => dispatch(getItineraries())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlansIndexGrid);
