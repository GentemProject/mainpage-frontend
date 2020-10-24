import { authMutations, authQueries } from '../services/auth';
import { usersQueries } from '../services/users';
import { causesQueries } from '../services/causes';

export const resolvers = {
  Query: {
    ...authQueries,
    ...usersQueries,
    ...causesQueries,
  },
  Mutation: {
    ...authMutations,
  },
};
