export const setCurrentUser = (configureStore) => {
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
