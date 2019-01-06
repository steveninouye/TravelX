import axios from 'axios';

export const getAttractionDetails = (attractionReference) =>
   axios.get(`/api/places/attraction/${attractionReference}`);
