import Validator from 'validator';

import { ensureStrType } from './data_conversion';

module.exports = function(data) {
   ensureStrType(data, 'handle', 'email', 'password');
   const { handle, email, password } = data;

   const errors = {};

   if (!Validator.isEmail(email)) {
      errors.email = 'Email is invalid';
   }

   if (Validator.isEmpty(email)) {
      errors.email = 'Email field is required';
   }

   if (Validator.isEmpty(password)) {
      errors.password = 'Password field is required';
   }

   return {
      errors,
      isValid: Object.keys(errors).length === 0
   };
};
