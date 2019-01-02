import express from 'express';
import passport from 'passport';

const places = express.Router();



places.get('/', passport.authenticate('jwt', { session: false }),(req,res) => {

})

export default places;
