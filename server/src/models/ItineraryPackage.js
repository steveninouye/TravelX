import mongoose from 'mongoose';

const { Schema } = mongoose;

const ItineraryPackageSchema = new Schema({
   attractions: { type: Array }
});

const ItineraryPackage = mongoose.model('itinerary_packages', ItineraryPackageSchema);
export default ItineraryPackage;
