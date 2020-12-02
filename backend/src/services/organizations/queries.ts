import { logger } from '../../utils';

import { OrganizationModel } from '.';

export const organizationsQueries = {
  getOrganization: async (_root: any, options: { organizationId: string; slug: string }) => {
    try {
      logger.info('query getOrganization');

      let filters = {};
      if (options.organizationId) {
        filters = { ...filters, _id: options.organizationId };
      }
      if (options.slug) {
        filters = { ...filters, slug: options.slug };
      }

      logger.child(filters).info('filters getOrganization query');

      const organization = await OrganizationModel.findOne(filters).exec();

      return organization;
    } catch (error) {
      logger.child(error).error('error getOrganization query');
      throw new Error(error);
    }
  },
  getOrganizations: async (
    _root: any,
    options: {
      first: number;
      endCursor: string;
      userId: string;
      causeId: string;
      country: string;
      donationLinks: boolean;
      donationBankAccountName: boolean;
      donationProducts: boolean;
    },
  ) => {
    try {
      logger.info('query getOrganizations');

      let first = 12;
      if (options.first) {
        first = options.first;
      }

      let filters = {};
      if (options.userId) {
        filters = { ...filters, userId: options.userId };
      }
      if (options.endCursor) {
        filters = { ...filters, _id: { $lt: options.endCursor } };
      }
      if (options.causeId) {
        filters = { ...filters, causesIds: options.causeId };
      }
      if (options.country) {
        filters = { ...filters, country: options.country };
      }
      if (options.donationLinks) {
        filters = { ...filters, donationLinks: { $exists: true, $ne: '' } };
      }
      if (options.donationBankAccountName) {
        filters = { ...filters, donationBankAccountName: { $exists: true, $ne: '' } };
      }
      if (options.donationProducts) {
        filters = { ...filters, donationProducts: { $exists: true, $ne: '' } };
      }

      logger.child(filters).info('filters getOrganizations query');

      const [organizations, count] = await Promise.all([
        OrganizationModel.find(filters).sort({ createdAt: 'descending' }).limit(first).exec(),
        OrganizationModel.count(filters),
      ]);
      const pageData = {
        totalOrganizations: count,
        hasNextPage: count > first,
        endCursor: organizations[organizations.length - 1]._id,
      };
      return { organizations: organizations, pageData: pageData };
    } catch (error) {
      logger.child(error).error('error getOrganizations query');
      throw new Error(error);
    }
  },
};
