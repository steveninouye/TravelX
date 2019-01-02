import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

import { attractions } from './TEMP_data';

export default function(state = attractions, action) {
   switch (action.type) {
      case RECEIVE_CURRENT_USER:
         return Object.assign({}, state, {
            [action.currentUser.id]: action.currentUser
         });
      default:
         return state;
   }
}
