import mongoose from 'mongoose';

const { Schema } = mongoose;

const AttractionsSchema = new Schema({
   formatted_address: { type: Schema.Types.Mixed },
   geometry: { type: Schema.Types.Mixed },
   name: { type: Schema.Types.Mixed },
   photos: { type: Schema.Types.Mixed },
   place_id: { type: Schema.Types.Mixed, unique: true, index: true },
   plus_code: { type: Schema.Types.Mixed },
   rating: { type: Schema.Types.Mixed },
   referenence: { type: Schema.Types.Mixed },
   types: { type: Schema.Types.Mixed },
   city_id: { type: Schema.Types.Mixed }
});

const Attractions = mongoose.model('attractions', AttractionsSchema);
export default Attractions;
