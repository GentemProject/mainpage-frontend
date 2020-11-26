import mongoose from 'mongoose';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const slugify = require('slugify-mongoose');

import { OrganizationInterface } from '.';

const OrganizationSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      lowercase: true,
      trim: true,
      index: true,
      unique: true,
      slug: 'name',
    },
    name: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    causesIds: {
      type: [mongoose.Types.ObjectId],
      required: true,
      index: true,
    },
    goal: {
      type: String,
    },
    description: {
      type: String,
    },
    howItIsUsingDonations: {
      type: String,
    },
    logoUrl: {
      type: String,
      required: true,
      default: '',
    },
    city: {
      type: String,
      index: true,
    },
    country: {
      type: String,
      index: true,
    },
    coordenates: {
      x: Number,
      y: Number,
    },
    sponsors: {
      type: [String],
    },
    contactEmail: {
      type: String,
    },
    contactPhone: {
      type: String,
    },
    contactWebsite: {
      type: String,
    },
    userId: {
      type: String,
      index: true,
    },
    adminName: {
      type: String,
    },
    adminEmail: {
      type: String,
    },
    facebookUrl: {
      type: String,
    },
    instagramUrl: {
      type: String,
    },
    twitterUrl: {
      type: String,
    },
    linkedinUrl: {
      type: String,
    },
    whatsappPhone: {
      type: String,
    },
    donationLinks: {
      type: [String],
    },
    donationBankAccountName: {
      type: String,
      index: true,
    },
    donationProducts: {
      type: String,
      index: true,
    },
  },
  {
    timestamps: true,
  },
);

OrganizationSchema.plugin(slugify);

export const OrganizationModel = mongoose.model<OrganizationInterface>(
  'Organization',
  OrganizationSchema,
);
