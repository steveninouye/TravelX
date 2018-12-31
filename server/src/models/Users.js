import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
   handle: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   },
   date: {
      type: Date,
      default: Date.now
   }
});

const User = mongoose.model('users', UserSchema);
module.exports = User;
