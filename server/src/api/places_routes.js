import express from 'express';
import { resolve } from 'path';
import fs from 'fs';
import request from 'request';
import rp from 'request-promise';
import passport from 'passport';

import keep from '../img/keep';
import { googleApi } from '../config/keys';
import { cityUrl, attractionUrl } from '../utils/api_urls';

const places = express.Router();

places.get(
   '/city/:city',
   passport.authenticate('jwt', { session: false }),
   (req, res) => {
      const { city } = req.params;
      rp(cityUrl(city))
         .then((json) => {
            const { results, next_page_token } = JSON.parse(json);
            results.forEach((result, resultIdx) => {
               result.photos.forEach((photo, photoIdx) => {
                  const photoRef = photo.photo_reference;
                  const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=${googleApi}`;
                  request(photoUrl).pipe(
                     fs.createWriteStream(
                        resolve(__dirname, `../img/${photoRef}.jpg`)
                     )
                  );
               });
            });
            res.json(JSON.parse(json));
         })
         .catch((err) => {
            console.log(err);
            res.status(500).json('Google API could not be reached');
         });
   }
);

// need to get "reference" off of result off of city route
places.get(
   '/attraction/:id',
   passport.authenticate('jwt', { session: false }),
   (req, res) => {
      const { id } = req.params;
      rp(attractionUrl(id))
         .then((json) => {
            const attraction = JSON.parse(json).result;
            // SAVE DATA HERE
            // SAVE PHOTOS HERE
            res.json(attraction);
         })
         .catch((err) => {
            console.log(err);
            res.status(500).json('Google API could not be reached');
         });
   }
);

places.get(
   '/photo/:photoRef',
   passport.authenticate('jwt', { session: false }),
   (req, res) => {
      const { photoRef } = req.params;
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
                     res.sendFile(filePath);
                  });
               });
            })
            .catch((err) => {
               res.status(500).send('could not get photo');
            });
      }
   }
);
export default places;
