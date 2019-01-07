import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
   email: {
      type: String,
      required: true
   },
   password_digest: {
      type: String,
      required: true
   },
   itinerary_packages: [
      { type: Schema.Types.ObjectId, ref: 'itinerary_packages' }
   ],
   date: {
      type: Date,
      default: Date.now
   }
});

const User = mongoose.model('users', UserSchema);
export default User;
