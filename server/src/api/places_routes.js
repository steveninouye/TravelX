import express from 'express';
import request from 'request';
import rp from 'request-promise';
import passport from 'passport';

import keep from '../img/keep';
import { cityUrl, attractionUrl } from '../utils/api_urls';
import { savePhoto } from '../utils/db_utils';

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
                  savePhoto(photoRef, false, false);
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

places.get(
   '/attraction/:id',
   passport.authenticate('jwt', { session: false }),
   (req, res) => {
      const { id } = req.params;
      rp(attractionUrl(id))
         .then((json) => {
            const attraction = JSON.parse(json).result;
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
      savePhoto(photoRef, true, true);
   }
);

export default places;
