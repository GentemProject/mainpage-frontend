import { mongoose } from '../connect';
const Schema = mongoose.Schema;
const projectSchema = new Schema(
  {
    slug: {
      type: String,
      unique: true,
    },
    primaryData: {
      name: {
        type: String,
        trim: true,
        required: true,
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
export default  projectModel
