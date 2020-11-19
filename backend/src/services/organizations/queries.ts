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
      limit: number;
      userId: string;
      lastOrganizationId: string;
      causeId: string;
      country: string;
      donationLinks: boolean;
      donationBankAccountName: boolean;
      totalLength: boolean;
      page: number;
    },
  ) => {
    try {
      logger.info('query getOrganizations');

      let limit = 12;
      if (options.limit) {
        limit = options.limit;
      }
      const skip = (options.page * limit) | 0;

      let filters = {};
      if (options.userId) {
        filters = { ...filters, userId: options.userId };
      }
      if (options.lastOrganizationId) {
        filters = { ...filters, _id: { $gt: options.lastOrganizationId } };
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

      logger.child(filters).info('filters getOrganizations query');

      const [organizations, count] = await Promise.all([
        OrganizationModel.find(filters).sort({ createdAt: -1 }).limit(limit).skip(skip).exec(),
        OrganizationModel.count(filters),
      ]);
      const totalPages = Math.ceil(count / limit) - 1;
      const pageData = {
        currentPage: options.page,
        totalPages: totalPages,
        hasNextPage: options.page !== totalPages,
        totalOrganizations: count,
      };
      return { organizations: organizations, pageData: pageData };
    } catch (error) {
      logger.child(error).error('error getOrganizations query');
      throw new Error(error);
    }
  },
};
