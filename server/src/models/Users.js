import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
   username: {
      type: String,
      required: true
   },
   password_digest: {
      type: String,
      required: true
   },
   date: {
      type: Date,
      default: Date.now
   }
});

const UserModel = mongoose.model('users', UserSchema);
export default UserModel;
