import { RECEIVE_ITINERARY, RECEIVE_ITINERARIES } from '../actions/itinerary_actions';

export default function (state = {}, action) {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ITINERARY:
      return Object.assign({}, state, { [action.itinerary._id]: action.itinerary })
    case RECEIVE_ITINERARIES:
      return Object.assign({}, action.itineraries)
    default:
      return state;
  }
};
