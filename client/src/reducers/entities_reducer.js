import { combineReducers } from 'redux';
import users from './users_reducer';

const entitiesReducer = combineReducers({
   users
   // products: ProductsSwitch,
   // bids: BidsSwitch,
   // categories: CategoriesSwitch
});

export default entitiesReducer;
