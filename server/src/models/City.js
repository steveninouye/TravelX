import mongoose from 'mongoose';

const { Schema } = mongoose;

const CitySchema = new Schema({
   name: {
      type: String,
      required: true
   }
});

const City = mongoose.model('cities', CitySchema);
export default City;
