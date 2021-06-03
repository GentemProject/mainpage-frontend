import { Cause } from 'modules/Causes';

export type OrganizationMin = {
  id: string;
  name: string;
  slug: string;
  logoUrl: string;
  country: string;
  causes: Cause[];
};

export type GetOrganizationsResponse = {
  organizations: OrganizationMin[];
};
