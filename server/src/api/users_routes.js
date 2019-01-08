import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { secretOrKey } from '../config/keys';
import User from '../models/User';
import validateRegisterInput from '../utils/registration_validations';
import validateLoginInput from '../utils/login_validations';

const users = express.Router();

users.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) return res.status(400).json(errors);

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({
        email: 'A user is already registered with that email'
      });
    }
    const newUser = new User({
      email: req.body.email,
      password_digest: req.body.password
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password_digest, salt, (err, hashPassword) => {
        if (err) throw err;
        newUser.password_digest = hashPassword;
        newUser
          .save()
          .then(({ id, email }) => {
            const payload = {
              id,
              email
            };
            jwt.sign(
              payload,
              secretOrKey,
              { expiresIn: 7200 },
              (err, token) => {
                res.json({ success: true, token: `Bearer ${token}` });
              }
            );
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json('user could not be registered');
          });
      });
    });
  });
});

users.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) return res.status(400).json(errors);

  const { email, password } = req.body;

  User.findOne({ email }).then((user) => {
    if (!user)
      return res.status(404).json({ email: 'This user does not exist' });

    bcrypt.compare(password, user.password_digest).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: user.id,
          email: user.email
        };
        jwt.sign(payload, secretOrKey, { expiresIn: 3600 }, (err, token) => {
          res.json({ success: true, token: `Bearer ${token}` });
        });
      } else {
        res.status(400).json({ password: 'Password is incorrect' });
      }
    });
  });
});

export default users;
