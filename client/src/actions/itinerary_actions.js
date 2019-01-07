import * as ItineraryAjaxUtil from '../utils/itinerary_ajax_utils';

export const RECEIVE_ITINERARY = 'RECEIVE_ITINERARY';
export const RECEIVE_ITINERARY_ERRORS = 'RECEIVE_ITINERARY_ERRORS';

export const receiveCityItinerary = (itinerary) => ({
   type: RECEIVE_ITINERARY,
   itinerary
});

export const receiveGetItineraryErrors = (errors) => ({
   type: RECEIVE_ITINERARY_ERRORS,
   errors
});

export const getRandCityItinerary = (city) => (dispatch) => {
   return ItineraryAjaxUtil.getRandCityItinerary(city)
      .then((itinerary) => dispatch(receiveCityItinerary(itinerary.data)))
      .catch((err) => dispatch(receiveGetItineraryErrors(err)));
};

export const getItinerary = (id) => (dispatch) => {
   return ItineraryAjaxUtil.getItinerary(id)
     .then(itinerary => dispatch(receiveCityItinerary(itinerary.data)))
     .catch(err => dispatch(receiveGetItineraryErrors(err)));
};