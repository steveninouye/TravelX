import axios from 'axios';

export const getRandCityItinerary = (city) =>
   axios.post('/api/places/city', { city });

export const getItinerary = (id) => 
   axios.get(`/api/itineraries/${id}`);

  export const getItineraries = () =>
    axios.get('/api/itineraries');