import Validator from 'validator';

import { ensureStrType } from './data_conversion';

function validateLoginInput(data) {
   ensureStrType(data, 'handle', 'email', 'password');
   const { email, password } = data;

   const errors = {};

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
}

export default validateLoginInput;
