import express from 'express';
import request from 'request';
import rp from 'request-promise';
import passport from 'passport';

import keep from '../img/keep';
import { randNum } from '../utils/data_conversion';
import { attractionUrl } from '../utils/api_urls';
import { savePhoto, getCityAttractions } from '../utils/db_utils';

const places = express.Router();

places.get(
   '/city/:city',
   // passport.authenticate('jwt', { session: false }),
   (req, res) => {
      const { city } = req.params;
      getCityAttractions(city)
         .then((attractions) => {
            let attractionsLastIndex = attractions.length - 1;
            let idxs = [
               randNum(attractionsLastIndex - 1, 0),
               randNum(attractionsLastIndex - 1, 0),
               randNum(attractionsLastIndex - 1, 0),
               randNum(attractionsLastIndex - 1, 0)
            ];
            const randAttractions = idxs.map((idx) => attractions[idx]);
            res.json(randAttractions);
         })
         .catch((err) => {
            res.status(500).json('Googe API could not be reached');
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
