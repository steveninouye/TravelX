import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ITINERARY } from '../actions/itinerary_actions';

export default function(state = {}, action) {
   switch (action.type) {
      case RECEIVE_CURRENT_USER:
         return Object.assign({}, state, {
            [action.currentUser.id]: action.currentUser
         });
      case RECEIVE_ITINERARY:
         return action.itinerary.attractions;
      default:
         return state;
   }
}
