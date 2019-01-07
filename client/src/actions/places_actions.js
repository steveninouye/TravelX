import * as PlacesAPIUtil from '../utils/places_ajax_utils';

export const clearErrors = (errors) => ({
  type: CLEAR_SESSION_ERRORS,
  errors
})

export const getAttractionDetails = (attractionReference) => (dispatch) =>
  PlacesAPIUtil.getAttractionDetails(attractionReference).then(
    details => dispatch(receiveAttractionDetails(details)),
    err => dispatch(receiveErrors(err.response.data)
  )
);
