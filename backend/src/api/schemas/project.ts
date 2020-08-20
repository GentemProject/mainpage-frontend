import { mongoose } from '../connect';
const Schema = mongoose.Schema;
const projectSchema = new Schema(
  {
    slug: {
      type: String,
    },
    primaryData: {
      name: {
        type: String,
        trim: true,
      },
      logo: String,
      objective: String,
      description: String,
      howUseDonation: String,
      sponsors: [String],
      communityId: [Number],
    },
    contact: {
      email: String,
      phone: String,
      whatsapp: String,
      instagram: String,
      facebook: String,
      linkedin: String,
      twitter: String,
      website: String,
    },
    paymentData: {
      link: String,
      bankAccount: String,
      products: String,
    },
    location: {
      map: String,
      city: String,
      country: String,
    },
    adminInfo: {
      adminName: String,
      adminEmail: String,
    },
  },
  {
    timestamps: true,
  },
);
const projectModel = mongoose.model('Project', projectSchema);
export default projectModel;

const oldSchema = new Schema({
  slug: String,
  name: String,
  logo: String,
  objective: String,
  communityworkwith: [Number],
  description: String,
  howusedonations: String,
  location: String,
  sponsors: [String],
  paymentslink: String,
  accounts: String,
  instructionstodeliverproducts: String,
  website: String,
  email: String,
  phones: String,
  whatsapp: String,
  instagram: String,
  facebook: String,
  twitter: String,
  linkedin: String,
  city: String,
  country: String,
  createtAt: Number,
}, {strict: false});

export const oldModel = mongoose.model('organiz', oldSchema, 'organiz');
