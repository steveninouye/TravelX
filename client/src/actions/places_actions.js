import * as PlacesAPIUtil from '../utils/places_ajax_utils';

export const RECEIVE_ATTRACTION_DETAILS = "RECEIVE_ATTRACTION_DETAILS";

export const receiveAttractionDetails = (attractionDetails) => ({
  type: RECEIVE_ATTRACTION_DETAILS,
  attractionDetails
})

export const getAttractionDetails = (attractionReference) => (dispatch) =>
  PlacesAPIUtil.getAttractionDetails(attractionReference).then(
    details => dispatch(receiveAttractionDetails(details)),
    err => dispatch(receiveErrors(err.response.data)
  )
);
