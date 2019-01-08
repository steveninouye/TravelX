import { getRandCityItinerary } from '../utils/itinerary_ajax_utils';

export const FETCH_PLAN = 'FETCH_PLAN';

export const receivePlan = (plan) => ({
  type: FETCH_PLAN,
  plan
});

export const fetchPlan = (city) => (dispatch) =>
  getRandCityItinerary(city)
    .then((plan) => dispatch(receivePlan(plan)))
    .catch((err) => console.log(err));
