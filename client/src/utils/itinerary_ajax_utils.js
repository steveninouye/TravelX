import axios from 'axios';

export const getRandCityItinerary = (city) =>
   axios.post('/api/places/city', { city });
