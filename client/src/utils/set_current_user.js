// TODO: import jwt_decode
import axios from 'axios';

import configureStore from '../reducers/root_reducer';

export const setCurrentUser = () => {
   if (localStorage.jwtToken) {
      const decodedUser = jwt_decode(localStorage.jwtToken);
      const currentTime = Date.now() / 1000;
      if (decodedUser.exp > currentTime) {
         setAuthToken(localStorage.jwtToken);
         const preloadedState = {
            session: { isAuthenticated: true, user: decodedUser }
         };
         return configureStore(preloadedState);
      }
   }
   return configureStore({});
};

export const setAuthToken = (token) => {
   if (token) {
      axios.defaults.headers.common['Authorization'] = token;
   } else {
      delete axios.defaults.headers.common['Authorization'];
   }
};
