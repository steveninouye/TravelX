import React from 'react';
import ReactDom from 'react-dom';

import Root from './components/Root';
import { setCurrentUser } from './utils/set_current_user';

document.addEventListener('DOMContentLoaded', () => {
   ReactDom.render(
      <Root store={setCurrentUser()} />,
      document.getElementById('root')
   );
});
