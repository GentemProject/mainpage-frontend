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

      logoUrl: string;
      wallUrl?: string;

      city?: string;
      state?: string;
      country?: string;
      address?: string;
      coordinateX?: number;
      coordinateY?: number;

      contactEmail?: string;
      contactPhone?: string;
      contactWebsite?: string;

      userId?: string;
      adminName?: string;

      facebookUrl?: string;
      instagramUrl?: string;
      twitterUrl?: string;
      whatsappPhone?: string;

      donationLinks?: string[];
      donationBankAccountName?: string;
      donationBankAccountType?: string;
      donationBankAccountNumber?: string;
    },
  ) => {
    try {
      logger.info('mutation createOrganization');
      const organization = await OrganizationModel.create(options);
      return organization;
    } catch (error) {
      logger.child(error).error('error getOrganizations controller');
      throw new Error(error);
    }
  },
};
