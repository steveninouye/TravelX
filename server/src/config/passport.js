import { JwtStrategy, ExtractJwt } from 'passport-jwt';
import mongoose from 'mongoose';
import { secretOrKey } from './keys';

const User = mongoose.model('users');

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

module.exports = (passport) => {
   passport.use(
      new JwtStrategy(options, (jwt_payload, done) => {
         User.findById(jwt_payload.id)
            .then((user) => {
               if (user) {
                  return done(null, user);
               } else {
                  return done(null, false);
               }
            })
            .catch((err) => console.log(err));
      })
   );
};
