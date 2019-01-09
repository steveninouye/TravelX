import {
  getRandCityItinerary
} from '../utils/itinerary_ajax_utils';

export const FETCH_PLAN = 'FETCH_PLAN';
export const RECEIVE_GOOGLE_API_KEY = 'RECEIVE_GOOGLE_API_KEY';

export const receivePlan = (plan) => ({
  type: FETCH_PLAN,
  plan
});

export const fetchPlan = (city) => (dispatch) =>
  getRandCityItinerary(city)
  .then((plan) => dispatch(receivePlan(plan)));

export const receiveGoogleApiKey = (apiKey) => ({
  type: RECEIVE_GOOGLE_API_KEY,
  apiKey
})

export const fetchGoogleApiKey = (city) => (dispatch) => {
  return fetchGoogleAPiKey
    .then((apiKey) => dispatch(receiveGoogleApiKey(plan)))
}