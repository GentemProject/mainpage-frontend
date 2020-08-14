import mongoose from 'mongoose';
import { config } from '../../utils/config';

mongoose.connect(config.X_MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on(
  "error",
  console.log.bind(console, "error en la conexion")
);
const Schema = mongoose.Schema;

const ongSchema = new Schema({
  organizationId: { type: String },
  name: { type: String },
  logo: { type: String },
  objective: { type: String },
  communityworkwith: { type: [] },
  description: { type: String },
  howusedonations: { type: String },
  location: { type: String },
  sponsors: { type: [] },
  paymentslink: { type: String },
  accounts: { type: String },
  instructionstodeliverproducts: { type: String },
  website: { type: String },
  email: { type: String },
  phones: { type: String },
  whatsapp: { type: String },
  instagram: { type: String },
  facebook: { type: String },
  twitter: { type: String },
  linkedin: { type: String },
  createtAt: { type: String },
}, {collection: 'gentem'});
//ongSchema.index({ country: 'text' });
const ongs = mongoose.model("gentem", ongSchema);
export {ongs}
