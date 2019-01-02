import Validator from 'validator';

import { ensureStrType } from './data_conversion';

module.exports = function(data) {
   ensureStrType(data, 'handle', 'username', 'password');
   const { username, password } = data;

   const errors = {};

   if (Validator.isEmpty(username)) {
      errors.username = 'Username field is required';
   }

   if (Validator.isEmpty(password)) {
      errors.password = 'Password field is required';
   }

   return {
      errors,
      isValid: Object.keys(errors).length === 0
   };
};
