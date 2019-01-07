import { combineReducers } from 'redux';
import users from './users_reducer';
import locations from './locations_reducer';
import attractions from './attractions_reducer';
import itineraries from './itineraries_reducer';

const entitiesReducer = combineReducers({
   users,
   locations,
   attractions,
   itineraries
});

export default entitiesReducer;
