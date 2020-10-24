import { authMutations, authQueries } from '../services/auth';
import { usersQueries } from '../services/users';
import { causesMutations, causesQueries } from '../services/causes';

export const resolvers = {
  Query: {
    ...authQueries,
    ...usersQueries,
    ...causesQueries,
  },
  Mutation: {
    ...authMutations,
    ...causesMutations,
  },
};
