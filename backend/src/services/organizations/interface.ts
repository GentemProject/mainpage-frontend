import mongoose from 'mongoose';

export interface OrganizationInterface extends mongoose.Document {
  slug?: string;
  name: string;

  causesIds: mongoose.Types.ObjectId[];

  goal: string;
  description: string;
  howItIsUsingDonations: string;
  sponsors: string[];

  logoUrl: string;

  city?: string;
  country?: string;
  mapUrl?: string;

  contactEmail?: string;
  contactPhone?: string;
  contactWebsite?: string;

  userId?: string;
  adminName?: string;
  adminEmail?: string;

  facebookUrl?: string;
  instagramUrl?: string;
  twitterUrl?: string;
  linkedinUrl?: string;
  whatsappPhone?: string;

  donationLinks?: string[];
  donationBankAccountName?: string;
  donationProducts?: string;

  createdAt?: string;
  updatedAt?: string;
}
