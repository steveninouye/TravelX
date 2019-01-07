import mongoose from 'mongoose';

const { Schema } = mongoose;

const ItineraryPackageSchema = new Schema({
   attractions: [{ type: Schema.Types.ObjectId, ref: 'attractions' }]
});

const ItineraryPackage = mongoose.model(
   'itinerary_packages',
   ItineraryPackageSchema
);
export default ItineraryPackage;
