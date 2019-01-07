import mongoose from 'mongoose';

const { Schema } = mongoose;

const AttractionsSchema = new Schema({
   icon: { type: Schema.Types.Mixed },
   formatted_address: { type: Schema.Types.Mixed },
   geometry: { type: Schema.Types.Mixed },
   name: { type: Schema.Types.Mixed },
   photos: { type: Schema.Types.Mixed },
   place_id: { type: Schema.Types.Mixed },
   plus_code: { type: Schema.Types.Mixed },
   rating: { type: Schema.Types.Mixed },
   reference: { type: Schema.Types.Mixed },
   types: { type: Schema.Types.Mixed },
   city: { type: Schema.Types.ObjectId, ref: 'cities' }
});

const Attraction = mongoose.model('attractions', AttractionsSchema);
export default Attraction;