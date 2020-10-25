import { logger } from '../../utils';
import { OrganizationModel } from './model';

export async function getOrganization(options: { organizationId?: string; slug?: string }) {
  try {
    logger.info('getOrganization controller');
    if (!options.organizationId || !options.slug) {
      return null;
    }

    let filters = {};

    if (options.organizationId) {
      filters = { ...filters, organizationId: options.organizationId };
    }

    if (options.slug) {
      filters = { ...filters, slug: options.slug };
    }

    const organization = await OrganizationModel.findOne(filters).exec();

    return organization;
  } catch (error) {
    logger.child(error).error('error getOrganization controller');
    return null;
  }
}

export async function getOrganizations(options: {
  userId?: string;
  lastOrganizationId?: string;
  causeId?: string;
  country?: string;
}) {
  try {
    logger.info('getOrganizations controller');

    let filters = {};

    if (options.userId) {
      filters = { ...filters, userId: options.userId };
    }
    if (options.lastOrganizationId) {
      filters = { ...filters, lastOrganizationId: { $lt: options.lastOrganizationId } };
    }
    if (options.causeId) {
      filters = { ...filters, causesIds: options.causeId };
    }
    if (options.country) {
      filters = { ...filters, country: options.country };
    }

    logger.child(filters).info('filters getOrganizations controller');
    const organization = await OrganizationModel.find(filters).exec();

    return organization;
  } catch (error) {
    logger.child(error).error('error getOrganizations controller');
    return null;
  }
}

export async function createOrganization() {
  try {
    logger.info('createCause controller');
    // return await OrganizationModel.create({ name: options.name });
    return '';
  } catch (error) {
    logger.child(error).error('error getOrganizations controller');
    return null;
  }
}
