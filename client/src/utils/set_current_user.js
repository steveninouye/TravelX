import jwt_decode from 'jwt-decode';

import { setAuthToken } from './session_ajax_utils';
import configureStore from '../reducers/root_reducer';

export const setCurrentUser = () => {
   if (localStorage.jwtToken) {
      const decodedUser = jwt_decode(localStorage.jwtToken);
      const currentTime = Date.now() / 1000;
      if (decodedUser.exp > currentTime) {
         setAuthToken(localStorage.jwtToken);
         const preloadedState = {
            entities: { users: decodedUser },
            session: decodedUser.id
         };
         return configureStore(preloadedState);
      }
   }
   return configureStore({});
};
