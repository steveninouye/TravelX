import React from 'react';
import ReactDom from 'react-dom';

import axios from 'axios';
window.axios = axios;

import Root from './components/Root';
import { setCurrentUser } from './utils/set_current_user';

// TESTING
import configureStore from './reducers/root_reducer';
import { login } from './actions/session_actions'
//

document.addEventListener('DOMContentLoaded', () => {

   // TESTING
   let store = configureStore();
   window.getState = store.getState;
   window.dispatch = store.dispatch;
   window.store = store;
   window.login = login;
   //


   ReactDom.render(
      <Root store={setCurrentUser()} />,
      document.getElementById('root')
   );
});
