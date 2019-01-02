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

   if (!isValid) return res.status(400).json(errors);

   User.findOne({ username: req.body.username }).then((user) => {
      if (user) {
         return res
            .status(400)
            .json({
               username: 'A user is already registered with that username'
            });
      }
      const newUser = new User({
         username: req.body.username,
         password_digest: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
         bcrypt.hash(newUser.password_digest, salt, (err, hashPassword) => {
            if (err) throw err;
            newUser.password_digest = hashPassword;
            newUser
               .save()
               .then(({ id, username }) => {
                  const payload = {
                     id,
                     username
                  };
                  jwt.sign(
                     payload,
                     secretOrKey,
                     { expiresIn: 3600 },
                     (err, token) => {
                        res.json({ success: true, token: `Bearer ${token}` });
                     }
                  );
               })
               .catch((err) => console.log(err));
         });
      });
   });
});

router.post('/login', (req, res) => {
   const { errors, isValid } = validateLoginInput(req.body);

   if (!isValid) return res.status(400).json(errors);

   const { username, password } = req.body;

   User.findOne({ username }).then((user) => {
      if (!user)
         return res.status(404).json({ username: 'This user does not exist' });

      bcrypt.compare(password, user.password_digest).then((isMatch) => {
         if (isMatch) {
            const payload = {
               id: user.id,
               username: user.username
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
