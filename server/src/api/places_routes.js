import express from 'express';
import request from 'request';
import rp from 'request-promise';
import passport from 'passport';

import { googleApi } from '../config/keys';
import { location, attraction } from './temp_api';

const places = express.Router();

places.get(
   '/city/:city',
   passport.authenticate('jwt', { session: false }),
   (req, res) => {
      const { city } = req.params;
      rp(
         `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${city}+point+of+interest&language=en&key=${googleApi}`
      )
         .then((res) => {
            const { results, next_page_token } = res;
            res.json(res);
         })
         .catch((err) => {
            res.json('Google API could not be reached');
         });
   }
);

places.get(
   '/attraction/:id',
   passport.authenticate('jwt', { session: false }),
   (req, res) => {
      const { id } = req.params;
      rp(
         `https://maps.googleapis.com/maps/api/place/details/json?placeid=${id}&fields=name,rating,formatted_phone_number,icon,photo,type,vicinity,url,opening_hours,website,price_level,rating,reviews&key=${googleApi}`
      )
         .then((res) => {
            const { results, next_page_token } = res;
            res.json(res);
         })
         .catch((err) => {
            res.json('Google API could not be reached');
         });
   }
);

export default places;
