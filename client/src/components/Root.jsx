import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import Router from './Router';

const Root = ({ store }) => (
   // <Provider store={store}>
   <Provider store={store}>
      <BrowserRouter>
         <Router />
      </BrowserRouter>
   </Provider>
);

export default Root;
