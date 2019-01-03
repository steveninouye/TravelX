import express from 'express';
import request from 'request';
import rp from 'request-promise';
import passport from 'passport';

import { googleApi } from '../config/keys';
import { location, attraction } from './temp_api';

const places = express.Router();

places.get(
   '/:city',
   passport.authenticate('jwt', { session: false }),
   (req, res) => {
      const city = req.params;
      rp(
         `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${city}+point+of+interest&language=en&key=${googleApi}`
      )
         .then((res) => {
            res.json(res);
         })
         .catch((err) => {
            res.json('Google API could not be reached');
         });
   }
);

export default places;
