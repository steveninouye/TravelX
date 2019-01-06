import express from 'express';
import request from 'request';
import rp from 'request-promise';
import passport from 'passport';

import keep from '../img/keep';
import { randNum } from '../utils/data_conversion';
import { attractionUrl } from '../utils/api_urls';
import { savePhoto, getCityAttractions } from '../utils/db_utils';

const places = express.Router();

places.post('/city', (req, res) => {
   const { city } = req.body;
   getCityAttractions(city)
      .then((attractions) => {
         let randAttractions = [1, 2, 3, 4, 5];
         randAttractions = randAttractions.map((_, idx) => {
            console.log('this is running');
            let attractionIdx = randNum(attractions.length - idx, 0);
            return attractions.splice(attractionIdx, 1)[0];
         });
         res.json(randAttractions);
      })
      .catch((err) => {
         console.log(err);
         res.status(500).json('Googe API could not be reached');
      });
});

places.get('/attraction/:id', (req, res) => {
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
});

places.get('/photo/:photoRef', (req, res) => {
   const { photoRef } = req.params;
   savePhoto(photoRef, true, true);
});

export default places;
