import {
  RECEIVE_ITINERARY,
  RECEIVE_ITINERARIES
} from '../actions/itinerary_actions';
import {
  RECEIVE_GOOGLE_API_KEY
} from "../actions/plan_actions"

export default function (state = {}, action) {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ITINERARY:
      return Object.assign({}, state, {
        [action.itinerary._id]: action.itinerary
      })
    case RECEIVE_ITINERARIES:
      return Object.assign({}, state, action.itineraries)
    case RECEIVE_GOOGLE_API_KEY:
      return Object.assign({}, state, {
        googleApiKey: action.apiKey
      })
    default:
      return state;
  }
};