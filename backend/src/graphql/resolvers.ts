import { authMutations, authQueries } from '../services/auth';
import { usersQueries } from '../services/users';

export const resolvers = {
  Query: {
    ...authQueries,
    ...usersQueries,
  },
  Mutation: {
    ...authMutations,
  },
};
