import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import session from './session_reducer';
import entities from './entities_reducer';

const rootReducer = combineReducers({
   entities,
   session
});

const configureStore = (preloadedState = {}) =>
   createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));

export default configureStore;
