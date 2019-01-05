import fs from 'fs';
import { resolve } from 'path';
import request from 'request';
import rp from 'request-promise';

import { googleApi } from '../config/keys';
import { cityUrl, attractionUrl } from '../utils/api_urls';

export const requestCityAttractions = (city) =>
   new Promise((resolve, reject) => {
      let url = cityUrl(city);
      let attractions = [];
      rp(url)
         .then((json1) => {
            let { results, next_page_token } = JSON.parse(json1);
            attractions = attractions.concat(results);
            rp(`${url}&pagetoken=${next_page_token}`).then((json2) => {
               let { results, next_page_token } = JSON.parse(json2);
               attractions = attractions.concat(results);
               rp(`${url}&pagetoken=${next_page_token}`).then((json3) => {
                  let { results } = JSON.parse(json3);
                  attractions = attractions.concat(results);
                  
               });
            });
         })
         .catch((err) => {
            console.log(err);
            res.status(500).json('Google API could not be reached');
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
