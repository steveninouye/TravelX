import express from 'express';
import request from 'request';
import rp from 'request-promise';
import passport from 'passport';

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
            // SAVE DATA HERE
            // SAVE PHOTOS HERE
            res.json(JSON.parse(json));
         })
         .catch((err) => {
            res.json('Google API could not be reached');
         });
   }
);

// need to get "reference" off of result off of city route
places.get(
   '/attraction/:id',
   passport.authenticate('jwt', { session: false }),
   (req, res) => {
      const { id } = req.params;
      console.log(attractionUrl(id));
      rp(attractionUrl(id))
         .then((json) => {
            const attraction = JSON.parse(json).result;
            // SAVE DATA HERE
            // SAVE PHOTOS HERE
            res.json(attraction);
         })
         .catch((err) => {
            console.log(err);
            res.json('Google API could not be reached');
         });
   }
);

export default places;
