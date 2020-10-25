import { logger } from '../../utils';

export const organizationsMutations = {
  createOrganization: async () => {
    try {
      logger.info('mutation createOrganization');
      return '';
    } catch (error) {
      throw new Error(error);
    }
  },
};
