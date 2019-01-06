import mongoose from 'mongoose';

const { Schema } = mongoose;

const ItinerarySchema = new Schema({
   attractions: { type: Schema.Types.Mixed }
});

const Itinerary = mongoose.model('itineraries', ItinerarySchema);
export default Itinerary;
