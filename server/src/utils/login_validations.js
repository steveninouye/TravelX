import Validator from 'validator';
import { validText } from './data_conversion';

module.exports = function(data) {
   let { handle, email, password } = data;
   validText(handle, email, password);

   let errors = {};

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
