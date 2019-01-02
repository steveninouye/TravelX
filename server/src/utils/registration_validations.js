import Validator from 'validator';

import { ensureStrType } from './data_conversion';

function validateRegisterInput(data) {
   ensureStrType(data, 'email', 'password', 'password2');
   const { email, password, password2 } = data;

   const errors = {};

   if (!Validator.isEmail(data.email)) {
      errors.email = 'Email is invalid';
   }

   if (Validator.isEmpty(email)) {
      errors.email = 'Email field is required';
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
}

export default validateRegisterInput;
