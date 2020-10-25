import { authMutations, authQueries } from '../services/auth';
import { usersQueries } from '../services/users';
import { causesMutations, causesQueries } from '../services/causes';
import { organizationsMutations, organizationsQueries } from '../services/organizations';

export const resolvers = {
  Query: {
    ...authQueries,
    ...usersQueries,
    ...causesQueries,
    ...organizationsQueries,
  },
  Mutation: {
    ...authMutations,
    ...causesMutations,
    ...organizationsMutations,
  },
};
