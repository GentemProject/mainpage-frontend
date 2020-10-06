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
projectSchema.index({ 'ĺocation.country': 'text' }, { sparse: false });
const projectModel = mongoose.model('Project', projectSchema);
export default projectModel;

/* const organizationSchema = new Schema({
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
    causeId: [Number],
  },
  contact: {
    email: String,
    phone: String,
    website: String,
  },
  socialMedia: {
    whatsapp: String,
    instagram: String,
    facebook: String,
    linkedin: String,
    twitter: String,
  },
  donationData: {
    link: String,
    bankAccount: String,
    products: String,
  },
  location: {
    coordenates: {
      x: Number,
      y: Number
    },
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
  }) */