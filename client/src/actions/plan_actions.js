import { attractions, attraction } from '../reducers/TEMP_data';
const testPlan = {
  id: 123,
  attractions: attractions.slice(0, 5)
};

export const FETCH_PLAN = 'FETCH_PLAN';

export const receivePlan = (plan) => ({
  type: FETCH_PLAN,
  plan
});

export const fetchPlan = (id) => (dispatch) => (
  dispatch(receivePlan(123))
);