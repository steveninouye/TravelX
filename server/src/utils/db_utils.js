import fs from 'fs';
import { resolve } from 'path';
import request from 'request';
import rp from 'request-promise';

import { googleApi } from '../config/keys';
import Attraction from '../models/Attractions';
import City from '../models/City';
import { cityUrl, attractionUrl } from '../utils/api_urls';

export const getCity = (cityName) =>
   new Promise((resolve, reject) => {
      City.findOne({ name: cityName })
         .then((city) => {
            if (city) {
               resolve({ city, isFound: true });
            } else {
               const newCity = new City({ name: cityName });
               newCity.save().then((city) => {
                  resolve({ city, isFound: false });
               });
            }
         })
         .catch((err) => reject(err));
   });

export const requestCityAttractions = (url, city, resolve, reject) => {
   let attractions = [];
   rp(url)
      .then((json1) => {
         let { results, next_page_token } = JSON.parse(json1);
         attractions = attractions.concat(results);
         rp(`${url}&pagetoken=${next_page_token}`).then((json2) => {
            let { results } = JSON.parse(json2);
            attractions = attractions.concat(results);
            console.log('attractions: ', attractions);
            console.log('attractions: ', attractions);
            attractions = attractions.map((attraction) => {
               attraction.city_id = city.id;
               return attraction;
            });
            console.log('attractions: ', attractions);
            Attraction.create(attractions).then((attractions) => {
               resolve(attractions);
            });
         });
      })
      .catch((err) => {
         reject(err);
      });
};

export const getCityAttractions = (cityName) =>
   new Promise((resolve, reject) => {
      let url = cityUrl(cityName);
      getCity(cityName).then(({ city, isFound }) => {
         if (isFound) {
            Attraction.find({ city_id: city.id })
               .then((attractions) => {
                  resolve(attractions);
               })
               .catch((err) => {
                  reject(err);
               });
         } else {
            return requestCityAttractions(url, city, resolve, reject);
         }
      });
   });

export const savePhoto = (
   photoRef,
   fileResponseBoolean,
   errorResponseBoolean
) => {
   const filePath = resolve(__dirname, `../img/${photoRef}.jpg`);
   if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
   } else {
      const file = fs.createWriteStream(filePath);
      const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=${googleApi}`;
      rp(photoUrl)
         .then((response) => {
            response.pipe(file);
            file.on('finish', () => {
               file.close(() => {
                  if (fileResponseBoolean) res.sendFile(filePath);
               });
            });
         })
         .catch((err) => {
            if (errorResponseBoolean)
               res.status(500).send('Could not get photo');
         });
   }
};
