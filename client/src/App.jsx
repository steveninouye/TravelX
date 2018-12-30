import React from 'react';
import ReactDom from 'react-dom';

import Root from './components/Root';

import axios from 'axios';
window.axios = axios;

document.addEventListener('DOMContentLoaded', () => {
   ReactDom.render(<Root />, document.getElementById('root'));
});
