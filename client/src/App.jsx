import React from 'react';
import ReactDom from 'react-dom';

import Root from './components/Root';

import axios from 'axios';
window.axios = axios;
// import configureStore from './reducers/root_reducer';
// import { setCurrentUser } from './utils/set_current_user';

document.addEventListener('DOMContentLoaded', () => {
   // const store = setCurrentUser(configureStore)
   // after you set current user pass store as a store prop
   ReactDom.render(<Root />, document.getElementById('root'));
});
