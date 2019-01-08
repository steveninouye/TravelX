import {
   RECEIVE_CURRENT_USER,
   RECEIVE_USER_LOGOUT
} from '../actions/session_actions';

export default function(state = null, action) {
   switch (action.type) {
      case RECEIVE_CURRENT_USER:
         return action.currentUser.id;
      case RECEIVE_USER_LOGOUT:
         return null;
      default:
         return state;
   }
}
