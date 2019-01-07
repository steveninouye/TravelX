import { RECEIVE_ITINERARY } from '../actions/itinerary_actions';

export default function (state = {}, action) {
  switch (action.type) {
    case RECEIVE_ITINERARY:
      return Object.assign({}, state, { [action.itinerary._id]: action.itinerary })
    default:
      return state;
  }
};
