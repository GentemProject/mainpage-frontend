import { logger } from '../../utils';

import { getOrganization, getOrganizations } from '.';

export const organizationsQueries = {
  getOrganization: async (_root: any, options: { id: string; slug: string }) => {
    try {
      logger.info('query getOrganization');

      const organization = await getOrganization(options);

      return organization;
    } catch (error) {
      throw new Error(error);
    }
  },
  getOrganizations: async (
    _root: any,
    options: { userId: string; lastOrganizationId: string; causeId: string; country: string },
  ) => {
    try {
      logger.info('query getOrganizations');

      const organization = await getOrganizations(options);

      return organization;
    } catch (error) {
      throw new Error(error);
    }
  },
};
