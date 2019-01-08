import { googleApi, unsplashApi } from '../config/keys';

export const cityUrl = (city) =>
  `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${city}+point+of+interest&language=en&key=${googleApi}`;

export const attractionUrl = (id) =>
  `https://maps.googleapis.com/maps/api/place/details/json?placeid=${id}&fields=name,rating,formatted_phone_number,icon,photo,type,vicinity,url,opening_hours,website,price_level,rating,reviews&key=${googleApi}`;

export const unsplashUrl = (query) =>
  `https://api.unsplash.com/search/photos?query=${query}&client_id=${unsplashApi}`;

export const photoUrl = (photoRef) =>
  `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=${googleApi}`;
