import Validator from 'validator';

import { ensureStrType } from './data_conversion';

module.exports = function validateRegisterInput(data) {
   ensureStrType(data, 'username', 'password', 'password2');
   const { username, password, password2 } = data;

   const errors = {};

   if (!Validator.isLength(username, { min: 4, max: 20 })) {
      errors.username = 'Username must be between 4 and 20 characters long';
   }

   if (Validator.isEmpty(username)) {
      errors.username = 'Username field is required';
   }

   if (!Validator.isLength(password, { min: 6, max: 30 })) {
      errors.password = 'Password must be between 6 and 30 characters long';
   }

   if (Validator.isEmpty(password)) {
      errors.password = 'Password is required';
   }

   if (!Validator.equals(password, password2)) {
      errors.password2 = 'Passwords must match';
   }

   return {
      errors,
      isValid: Object.keys(errors).length === 0
   };
};
