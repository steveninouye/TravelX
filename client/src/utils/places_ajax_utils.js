import axios from 'axios';

export const getCityItinerary = (city) =>
   axios.post('/api/places/city', { city });

export const getAttractionDetails = (attractionReference) =>
   axios.get(`/api/places/attraction/${attractionReference}`);
