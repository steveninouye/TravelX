import axios from 'axios';

export const getCityAttractions = (city) => axios.post('/api/city', { city });

export const getAttractionDetails = (attractionReference) =>
   axios.get(`/api/attraction/${attractionReference}`);