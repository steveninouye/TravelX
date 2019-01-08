import express from 'express';
import request from 'request';
import rp from 'request-promise';

import keep from '../img/keep';
import { randNum } from '../utils/data_conversion';
import { attractionUrl } from '../utils/api_urls';
import { savePhoto, getCityAttractions, getItinerary } from '../utils/db_utils';

const places = express.Router();

places.post('/city', (req, res) => {
   const { city } = req.body;
   getCityAttractions(city)
      .then((attractions) => {
         if (attractions.length === 0)
            return res.status(500).json('City could not be found');
         const randAttractions = [];
         for (let i = 0; i < 10; i++) {
            const attractionIdx = randNum(attractions.length - i, 0);
            const attraction = attractions.splice(attractionIdx, 1)[0];
            if (attraction) randAttractions.push(attraction);
         }

         getItinerary(randAttractions).then((itinerary) => {
            res.json(itinerary);
         });
      })
      .catch((err) => {
         console.log(err);
         res.status(500).json('Googe API could not be reached');
      });
});

places.get('/attraction/:reference', (req, res) => {
   const { reference } = req.params;
   rp(attractionUrl(reference))
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
   savePhoto(req, res, photoRef, true, true);
});

export default places;
