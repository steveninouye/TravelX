import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import passport from 'passport';

import { secretOrKey } from '../config/keys';
import User from '../models/Users';
import validateRegisterInput from '../utils/registration_validations';
import validateLoginInput from '../utils/login_validations';

const router = express.Router();

router.get(
   '/protected',
   passport.authenticate('jwt', { session: false }),
   (req, res) => {
      console.log('req: ', req);
      console.log('res: ', res);
      res.json('this is the response');
   }
);

router.get('/', (req, res) => {
   res.json('this is user route');
});

router.post('/register', (req, res) => {
   const { errors, isValid } = validateRegisterInput(req.body);
   if (!isValid) {
      return res.status(400).json(errors);
   }

   User.findOne({ email: req.body.email }).then((user) => {
      if (user) {
         return res
            .status(400)
            .json({ email: 'A user is already registered with that email' });
      } else {
         const newUser = new User({
            handle: req.body.handle,
            email: req.body.email,
            password: req.body.password
         });

         bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
               if (err) {
                  throw err;
               }
               newUser.password = hash;
               newUser
                  .save()
                  .then((user) => res.json(user))
                  .catch((err) => console.log(err));
            });
         });
      }
   });
});

router.post('/login', (req, res) => {
   const { errors, isValid } = validateLoginInput(req.body);
   if (!isValid) {
      return res.status(400).json(errors);
   }

   const email = req.body.email;
   const password = req.body.password;

   User.findOne({ email /*: email*/ }).then((user) => {
      if (!user) {
         return res.status(404).json({ email: 'This user does not exist' });
      }
      bcrypt.compare(password, user.password).then((isMatch) => {
         if (isMatch) {
            const payload = {
               id: user.id,
               handle: user.handle,
               email: user.email
            };
            jwt.sign(
               payload,
               secretOrKey,
               { expiresIn: 3600 },
               (err, token) => {
                  res.json({ success: true, token: `Bearer ${token}` });
               }
            );
         } else {
            res.status(400).json({ password: 'Password is incorrect' });
         }
      });
   });
});

export default router;
