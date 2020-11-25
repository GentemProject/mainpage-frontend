import mongoose from 'mongoose';
import { logger } from '../../utils';

import { OrganizationModel } from '.';

export const organizationsMutations = {
  createOrganization: async (
    _root: any,
    options: {
      name: string;

      causesIds: string[];

      goal: string;
      description: string;
      howItIsUsingDonations: string;
      sponsors: string[];

      logoUrl: string;

      city?: string;
      country?: string;
      coordenates?: number[];

      contactEmail?: string;
      contactPhone?: string;
      contactWebsite?: string;

      userId?: string;
      adminName?: string;

      facebookUrl?: string;
      instagramUrl?: string;
      twitterUrl?: string;
      whatsappPhone?: string;
      linkedinUrl?: string;

      donationLinks?: string[];
      donationBankAccountName?: string;
      donationProducts?: string;
    },
  ) => {
    try {
      logger.info('mutation createOrganization');

      const organizationMapped = {
        ...options,
        causesIds: options.causesIds.map(causeId => mongoose.Types.ObjectId(causeId)),
      };
      const organization = await OrganizationModel.create(organizationMapped);
      return organization;
    } catch (error) {
      logger.child(error).error('error getOrganizations controller');
      throw new Error(error);
    }
  },
};
