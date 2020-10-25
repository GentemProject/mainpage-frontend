import mongoose from 'mongoose';

import { OrganizationInterface } from '.';

const OrganizationSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    causesIds: {
      type: [String],
      required: true,
    },
    goal: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    howItIsUsingDonations: {
      type: String,
      required: true,
    },
    logoUrl: {
      type: String,
      required: true,
      default: '',
    },
    wallUrl: {
      type: String,
    },
    city: {
      type: String,
      index: true,
      unique: true,
    },
    state: {
      type: String,
      index: true,
      unique: true,
    },
    country: {
      type: String,
      index: true,
      unique: true,
    },
    address: {
      type: String,
    },
    coordinateX: {
      type: Number,
    },
    coordinateY: {
      type: Number,
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
      unique: true,
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
    whatsappPhone: {
      type: String,
    },
    donationLinks: {
      type: [String],
    },
    donationBankAccountName: {
      type: String,
    },
    donationBankAccountType: {
      type: String,
    },
    donationBankAccountNumber: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const OrganizationModel = mongoose.model<OrganizationInterface>(
  'Organization',
  OrganizationSchema,
);
