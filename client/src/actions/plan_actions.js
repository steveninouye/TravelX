import {
  getRandCityItinerary
} from '../utils/itinerary_ajax_utils';
import * as planUtils from "../utils/plans_api_util"

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

export const fetchGoogleApiKey = () => (dispatch) => {
  return planUtils.fetchGoogleApiKey()
    .then((apiKey) => dispatch(receiveGoogleApiKey(apiKey.data)))
}